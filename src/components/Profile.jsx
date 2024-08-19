import { useLanguage } from "../context/LanguageContext";

const Profile = ({ profile }) => {
    const { language } = useLanguage();

    return (
        <div className="bg-blue-700 text-white p-20 px-72 dark:bg-[#171043]">
            <h1 className="text-6xl font-bold text-lime-300">
                {language === "tr" ? "Profil" : "Profile"}
            </h1>
            <div className="mt-8 grid grid-cols-3 gap-20">

                <div className="">
                    <h2 className="text-4xl font-bold mb-4">
                        {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
                    </h2>
                    <p className="mb-2 text-xl">
                        <strong>{language === "tr" ? "Doğum tarihi:" : "Date of Birth:"}</strong> {profile.dogumTarihi}
                    </p>
                    <p className="mb-2 text-xl">
                        <strong>{language === "tr" ? "İkamet Şehri:" : "City:"}</strong> {profile.sehir}
                    </p>
                    <p className="mb-2 text-xl">
                        <strong>{language === "tr" ? "Eğitim Durumu:" : "Education Level:"}</strong> {profile.egitim}
                    </p>
                    <p className="mb-2 text-xl">
                        <strong>{language === "tr" ? "Tercih Ettiği Rol:" : "Preferred Role:"}</strong> {profile.rol}
                    </p>
                </div>

                <div className="">
                    <img src="/assets/image 2.png" className="rounded-lg object-cover" />
                </div>

                <div className="w-2/4">
                    <h2 className="text-2xl font-bold mb-4">
                        {language === "tr" ? "Hakkımda" : "About Me"}
                    </h2>
                    <p className="text-white">{profile.hakkimda}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
