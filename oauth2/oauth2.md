
Resource Owner
Client 
Authorization Server
Resource Server


Client Types

Confidential Client -- can keep client secret safe
Public Client -- can not  keep client id client secret safe


Claims -- data passed in tokens ex:userid,expiry time

OpenId -- Id token 
  Claims and scope(openid)
  
Server Side Web App -- Authorization code
Server Side without UI -- Clien Credentials
JavaScript SPA -- PKCE Enhanced Authorization Code
Native Mobile Apps --  Authorization code,PKCE Enhanced Authorization Code
Device like playstation -- Device Code






OAuth Types:

Authorization Code::

The application opens a browser to send the user to the OAuth server
The user sees the authorization prompt and approves the app’s request
The user is redirected back to the application with an authorization code in the query string
The application exchanges the authorization code for an access token


Client Credentials::

The Client Credentials grant is used when applications request an access token to access their own resources, not on behalf of a user.


Device Code::

While the device is waiting for the user to complete the authorization flow on their own computer or phone, the device meanwhile begins polling the token endpoint to request an access token.


Refresh Token::

The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired.


Depricated: Implicit type,Password Grant

Refresh Token type

PKCE -- Proof Key For Code Exchange
  
  code_challenge_method== either S256 or plain
  code_challenge_value 
  code_verifier_value
  
first generate   code_verifier_value then code_challenge_value based on code_verifier

send code_challenge in  get request and code_verifier in post request
  
grant_type(param) either authorization_code or client_credentials etc .. in post request 

client_credentials -- machine to machine( in microservices one service to other)

Password Grant -- when redirection is not possible, when application is highly trustable, not recommended as per standards

Never expires -- refresh_expires_in = zero
  send scope offline for never expiring refresh token, scopes should be seperated by space while sending request
  

Authorization Servers  :
  KeyCloak Server  - is an opensource Identity and access management solution
  spring Authorization Server
  AWS Cognito
  Microsoft Identity Access
  Okta
  
Single Sign-On -- user logins to one application, no need to login for other applications same for logout

Social Login -- login using social networks

User Federation -- Ldap or internal repository of users

OAuth2ResourceServer -- dependency

anyone of following property
spring.security.oauth2.resourceserver.jwt.issuer-uri = http://localhost:8080/auth/realms/appsdeveloperblog
spring.security.oauth2.resourceserver.jwt.jwk-set-uri = http://localhost:8080/auth/realms/appsdeveloperblog/protocol/openid-connect/certs

@AuthenticationPrincipal Jwt jwt

/userinfo -- to get userinformaton from authorization server

scopes -- openid profile email custom_scopes  
  
  A role is a collection of authorities
  
  hasRole("ADMIN") == hasAuthority("ROLE_ADMIN")
  
@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
		jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());
	 
		http//.cors().and()
			.authorizeRequests()
					.antMatchers(HttpMethod.GET, "/users/status/check") 
					//.hasAuthority("SCOPE_profile")
					.hasRole("developer")
					//.hasAnyAuthority("ROLE_developer")
					//.hasAnyRole("devleoper","user")
				.anyRequest().authenticated()
				.and()
			.oauth2ResourceServer()
			.jwt()
			.jwtAuthenticationConverter(jwtAuthenticationConverter);
	}


Authentication authentication = 
		SecurityContextHolder.getContext().getAuthentication();
		
The Authentication contains:

principal - identifies the user. When authenticating with a username/password this is often an instance of UserDetails.

credentials - Often a password. In many cases this will be cleared after the user is authenticated to ensure it is not leaked.

authorities - the GrantedAuthoritys are high level permissions the user is granted. A few examples are roles or scopes.		

@Secured("ROLE_developer")		
@PreAuthorize("hasAuthority('ROLE_developer') or #id == #jwt.subject") 
@PostAuthorize("returnObject.userId == #jwt.subject")

**Method level security has higher priority than class level security**

@PreFilter and @PostFilter

@EnableGlobalMethodSecurity(securedEnabled = true)
@EnableGlobalMethodSecurity(prePostEnabled = true)


403 - Forbidden

401 - Unauthorized

@AuthenticationPrincipal OidcUser -- interface

spring.security.oauth2.client.registration.mywebclient.client-id = photo-app-webclient
spring.security.oauth2.client.registration.mywebclient.client-secret = 5065bd8e-7cee-4f7a-b0d3-3848dce5010c
spring.security.oauth2.client.registration.mywebclient.scope = openid, profile, roles
spring.security.oauth2.client.registration.mywebclient.authorization-grant-type = authorization_code
spring.security.oauth2.client.registration.mywebclient.redirect-uri = http://localhost:8087/login/oauth2/code/mywebclient

spring.security.oauth2.client.provider.mywebclient.authorization-uri = http://localhost:8080/auth/realms/appsdeveloperblog/protocol/openid-connect/auth
spring.security.oauth2.client.provider.mywebclient.token-uri = http://localhost:8080/auth/realms/appsdeveloperblog/protocol/openid-connect/token
spring.security.oauth2.client.provider.mywebclient.jwk-set-uri=http://localhost:8080/auth/realms/appsdeveloperblog/protocol/openid-connect/certs
spring.security.oauth2.client.provider.mywebclient.user-info-uri = http://localhost:8080/auth/realms/appsdeveloperblog/protocol/openid-connect/userinfo
spring.security.oauth2.client.provider.mywebclient.user-name-attribute = preferred_username


CSRF-- Cross Origin Request Forgery
A CSRF token is a unique, secret, unpredictable value that is generated by the server-side application and transmitted to the client in such a way that it is included in a subsequent HTTP request made by the client. When the later request is made, the server-side application validates that the request includes the expected token and rejects the request if the token is missing or invalid.

server will send cookie XSRF-TOKEN , client will send  Header X-XSRF-TOKEN


CORS--Cross Origin Resource Sharing

Access-control-Origin
Access-control-Methods
Access-control-Headers








	
	  
  







