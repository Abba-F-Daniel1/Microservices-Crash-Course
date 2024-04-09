import UserService from "./services/user.service.js"
import EmailService from "./services/email.service.js"
import AuthService from "./services/auth.service.js"

async function startApp() {
  // Start the user service
  await UserService.start();
  // Start the email service
  await EmailService.start();
  // Start the auth service
  await AuthService.start();
  try {
    // Simulate creating a user
    const newUser = await UserService.call("user.createUser", {
      username: "John Doe",
      email: "john@gmail.com"
    })
    console.log("New user created:", newUser);
    const users = await UserService.call("user.getUsers");
    console.log("All users:", users);
    // Simulate sending an email
    const emailResult = await EmailService.call("email.sendEmail", {
      recipient: "newUser.email",
      subject: "Welcome to our platform!",
      content: "Thank you for signing up!"
    })
    console.log(emailResult);
    // Simulate authenticating a user
    const authResult = await AuthService.call("auth.authUser", {
      username: "admin",
      password: "password"
    })
    console.log('AuthResult:', authResult);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Stop the user service
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp();