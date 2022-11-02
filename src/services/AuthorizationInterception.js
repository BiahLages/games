import TokenService from "./TokenService";

class AuthorizationInterception {
  static GetJwtBearerAuthorization() {
    const jwtBearerAuthorization = `Bearer ${TokenService.GetTokenFromStorage}`;

    return jwtBearerAuthorization;
  }
}

return AuthorizationInterception;

export default AuthorizationInterception;
