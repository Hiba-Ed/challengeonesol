'use strict'

class LoginRequired {

  async handle ({ auth, response }, next) {
    try {
      await auth.check();
      } catch (error) { 
        return response.send("You have to be logged in to view the dashboard" );
      }
    // call next to advance the request
    await next()
  }
}

module.exports = LoginRequired
