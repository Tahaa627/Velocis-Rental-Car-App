export const validateEmail = (email: string): string => {

    if (!email.trim()) {
        return "Email is required.";
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    return "";

};

export const validatePassword = (password: string): string => {

    if (!password.trim()) {
        return "Password is required.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }

    return "";

};