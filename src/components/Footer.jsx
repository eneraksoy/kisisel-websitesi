import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

const Footer = ({ contact = {} }) => {
    const { language } = useLanguage();

    const handleEmailClick = () => {
        axios.post("https://reqres.in/api/workintech", {
            email: contact.email
        })
            .then(response => {
                console.log("Email gönderildi", response.data);
            })
            .catch(error => {
                console.error("Email gönderilemedi", error);
            });
    };

    return (
        <footer className="bg-white py-10 text-center dark:bg-[#252128]">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-[#8F88FF]">
                {language === "tr" ? "Bana bir mesaj gönder!" : "Send me a message!"}
            </h2>
            <p className="mt-4 dark:text-white">
                {language === "tr" ? "Bir sorunuz veya teklifiniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Buyrun." : "Got a question or proposal, or just want to say hello? Go ahead."}
            </p>
            <button onClick={handleEmailClick} className="text-blue-700 font-bold underline mt-2 dark:text-[#8F88FF]">
                {contact.email}
            </button>
            <button className="flex justify-center mx-auto mt-4">
                <img src="../public/assets/socials.png" />
            </button>
        </footer>
    );
};

export default Footer;
