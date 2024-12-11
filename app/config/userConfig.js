import { saveUser } from "../services/actions";

export const handleUserSave = async (user) => {
  try {
    if (user) {
      const email =
        Array.isArray(user.emailAddresses) && user.emailAddresses.length > 0
          ? user.emailAddresses[0].emailAddress
          : null;

      await saveUser({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: email,
        image: user.imageUrl,
      });
    }
  } catch (error) {
    console.error("Error saving user:", error);
  }
};
