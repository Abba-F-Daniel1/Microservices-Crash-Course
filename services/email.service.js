import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      // Simulate sending an email
      console.log(`Sending email to ${recipient} with subject ${subject}`);
      console.log(`Content: ${content}`);
      return `Email sent to ${recipient} successfully!`
    },
  }
});

export default broker;