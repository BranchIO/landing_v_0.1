import { mountLegal, SMS_NUMBER, SUPPORT_EMAIL, type LegalDoc } from "./legal";

const doc: LegalDoc = {
  title: "Terms of Service",
  intro:
    "These terms are the agreement between you and Branch for the use of our website, our web application, and our assistant, including by text message. By using the service you agree to them.",
  sections: [
    {
      heading: "The service",
      blocks: [
        "Branch provides software that helps you understand and use your professional network, including Scour, an assistant that answers questions and carries out tasks you ask for. Scour is reachable inside the Branch web application and, if you choose to link a mobile number, by text message.",
      ],
    },
    {
      heading: "Your account",
      blocks: [
        "You must be at least 18 years old and able to enter into a contract. You are responsible for keeping your sign-in credentials secure and for activity that happens under your account. Tell us promptly at " +
          SUPPORT_EMAIL +
          " if you believe your account has been used without your permission.",
      ],
    },
    {
      heading: "Text messaging terms",
      blocks: [
        "Linking a mobile number is optional. You opt in by sending the first text message to our number, " +
          SMS_NUMBER +
          "; we reply with a one-time sign-in link, and the number is linked to your account only once you sign in. We do not send messages to numbers that have not messaged us first.",
        "Message frequency varies and depends on you: our messages are replies to messages you send, plus any notifications from workflows or reminders you have set up. Message and data rates may apply, and your mobile carrier's charges are between you and your carrier.",
        "Reply STOP to any message to opt out and stop all further messages; you can also unlink your number in the app under Settings → Phone. Reply HELP for help, or email " +
          SUPPORT_EMAIL +
          ". Carriers are not liable for delayed or undelivered messages. Text messages are not a secure channel, and delivery is not guaranteed — do not use text messages for emergencies or to send anything you need to be confidential.",
      ],
    },
    {
      heading: "Acceptable use",
      blocks: [
        "You agree not to:",
        [
          "Use the service to break the law, infringe someone's rights, or harass, stalk, or endanger anyone.",
          "Upload or connect data you do not have the right to use, or use the service in a way that breaches another platform's terms.",
          "Send unsolicited bulk messages, or use the assistant to generate or distribute spam or deceptive content.",
          "Probe, scrape, overload, or attempt to gain unauthorised access to the service or another user's data.",
          "Resell or redistribute the service without our written permission.",
        ],
        "We may suspend or terminate accounts that breach these rules.",
      ],
    },
    {
      heading: "Your content and data",
      blocks: [
        "You keep ownership of the content and data you put into Branch. You grant us the limited licence needed to host, process, and display that content so we can operate the service for you — for example sending your request to an AI model provider to generate an answer. We use your content to run the service, not to advertise to you.",
      ],
    },
    {
      heading: "Assistant output",
      blocks: [
        "Scour is an AI assistant. Its answers can be incomplete or wrong, and they are not legal, financial, tax, medical, or professional advice. You are responsible for checking anything important before acting on it. Actions that change your data are gated behind your explicit approval in the app, and you are responsible for the actions you approve.",
      ],
    },
    {
      heading: "Third-party services",
      blocks: [
        "The service integrates with third parties you choose to connect, and relies on providers including cloud hosting, database, messaging, and AI model providers. Your use of a connected third-party service is governed by that party's own terms, and we are not responsible for their services or their availability.",
      ],
    },
    {
      heading: "Availability and changes",
      blocks: [
        "We may change, suspend, or discontinue any part of the service. We aim to give reasonable notice of material changes to these terms or of a discontinuation that would affect you. Continuing to use the service after a change takes effect means you accept the updated terms.",
      ],
    },
    {
      heading: "Disclaimer and limitation of liability",
      blocks: [
        'The service is provided "as is" and "as available", without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the service will be uninterrupted, error-free, or secure.',
        "To the fullest extent permitted by law, Branch will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data. Our total liability arising out of or relating to the service is limited to the greater of the amount you paid us in the twelve months before the claim, or one hundred US dollars. Some jurisdictions do not allow these limits, in which case they apply to the maximum extent permitted.",
      ],
    },
    {
      heading: "Termination",
      blocks: [
        "You can stop using the service and delete your account at any time. We may suspend or terminate your access if you breach these terms, if required by law, or if continuing to provide the service to you would create a risk to others. Provisions that by their nature should survive termination will survive it.",
      ],
    },
    {
      heading: "Governing law",
      blocks: [
        "These terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws rules, and the courts located in Delaware will have exclusive jurisdiction over disputes, except that either party may seek injunctive relief in any court of competent jurisdiction.",
      ],
    },
    {
      heading: "Contact",
      blocks: ["Questions about these terms: " + SUPPORT_EMAIL + "."],
    },
  ],
};

mountLegal(doc);
