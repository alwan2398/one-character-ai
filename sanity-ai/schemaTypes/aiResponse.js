export default {
  name: "aiResponse",
  type: "document",
  title: "AI Response",
  fields: [
    {
      name: "character",
      type: "reference",
      to: [{ type: "character" }],
      title: "Character",
    },
    {
      name: "user",
      type: "reference",
      to: [{ type: "user" }],
      title: "User",
    },
    {
      name: "response",
      type: "text",
      title: "Response",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
    },
  ],
};
