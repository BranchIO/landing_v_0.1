import { mountLegal, SMS_NUMBER, SUPPORT_EMAIL, type LegalDoc } from "./legal";

const doc: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "This policy explains what Branch collects when you use our website and products, why we collect it, and the choices you have. We keep it short and specific rather than exhaustive and vague.",
  sections: [
    {
      heading: "Who we are",
      blocks: [
        "Branch builds software that helps people understand and use their professional network. Our products include the Branch web application and Scour, an assistant reachable inside the app and by text message. If you have a question about this policy, email " +
          SUPPORT_EMAIL +
          ".",
      ],
    },
    {
      heading: "Information we collect",
      blocks: [
        "We collect only what the product needs to work:",
        [
          "Account information — your name, email address, and authentication identifiers from the sign-in provider you choose.",
          "Mobile phone number — only if you choose to link a phone so you can use Scour by text message.",
          "Content you give us — messages you send the assistant, notes, lists, workflows, and any network or contact data you import or connect.",
          "Usage and diagnostic data — logs, device and browser information, and error reports used to keep the service running and secure.",
        ],
        "We do not buy contact lists, and we do not collect information about you from data brokers to build a marketing profile.",
      ],
    },
    {
      heading: "How we use information",
      blocks: [
        "We use the information above to provide and operate the service, answer your requests, run the tasks and workflows you ask for, maintain security and prevent abuse, meet legal obligations, and improve the product. Where we use third-party AI model providers to generate responses, the content of your request is sent to that provider solely to produce your answer.",
      ],
    },
    {
      heading: "Text messaging (SMS)",
      blocks: [
        "You may link your mobile number so you can use the assistant by text. Linking is entirely optional and always initiated by you: you text our number first, we reply with a one-time sign-in link, and the number is connected to your account only after you sign in. We never message a number that has not messaged us first.",
        "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support services, such as our messaging carrier, is permitted solely to deliver the messages you have requested. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
        "You can stop messages at any time by replying STOP to any message from us, or by unlinking your number in the app under Settings → Phone. Reply HELP for assistance. Message and data rates may apply. Our messaging number is " +
          SMS_NUMBER +
          ".",
      ],
    },
    {
      heading: "How we share information",
      blocks: [
        "We do not sell your personal information. We share it only with service providers who process it on our behalf and under contract — for example cloud hosting, our database provider, our messaging carrier, and AI model providers — and only to the extent needed to run the service. We may also disclose information when required by law, or to protect the rights, safety, and property of Branch, our users, or the public. If Branch is involved in a merger or acquisition, information may transfer as part of that transaction, subject to this policy.",
      ],
    },
    {
      heading: "Retention",
      blocks: [
        "We keep your information for as long as your account is active. Conversations, including text-message conversations mirrored into the app, are retained so you can look back at them, and are deleted when you delete them or when you close your account. Backups and logs age out on a rolling schedule.",
      ],
    },
    {
      heading: "Security",
      blocks: [
        "Data is encrypted in transit and at rest. Access to production systems is limited to people who need it, connected third-party credentials are stored encrypted, and each user's assistant data is isolated from every other user's. No system is perfectly secure, but we take this seriously and will notify you promptly if a breach affects your data.",
      ],
    },
    {
      heading: "Your choices and rights",
      blocks: [
        "You can access and correct your account information in the app, unlink your phone number at any time, disconnect any connected account, and delete your account, which deletes the data associated with it. Depending on where you live you may have additional rights to access, correct, delete, or port your personal information, or to object to certain processing. Email " +
          SUPPORT_EMAIL +
          " and we will respond within the time the applicable law requires.",
      ],
    },
    {
      heading: "Children",
      blocks: [
        "Branch is not intended for anyone under 18, and we do not knowingly collect personal information from children. If you believe a child has given us information, contact us and we will delete it.",
      ],
    },
    {
      heading: "International users",
      blocks: [
        "Branch is operated from the United States, and information we collect is processed there. If you use the service from outside the United States, you understand that your information will be transferred to and processed in the United States.",
      ],
    },
    {
      heading: "Changes to this policy",
      blocks: [
        "If we change this policy materially we will update the date at the top of this page and, where the change is significant, notify you in the app or by email before it takes effect.",
      ],
    },
    {
      heading: "Contact",
      blocks: ["Questions, requests, or complaints: " + SUPPORT_EMAIL + "."],
    },
  ],
};

mountLegal(doc);
