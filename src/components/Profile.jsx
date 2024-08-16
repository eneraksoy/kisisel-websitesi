const Profile = ({ profile }) => (
    <div className="bg-blue-700 text-white p-20 px-72">
        <h1 className="text-6xl font-bold text-lime-300">Profile</h1>
        <div className="mt-8 grid grid-cols-3 gap-20">

            <div className="">
                <h2 className="text-4xl font-bold mb-4">Basic Information</h2>
                <p className="mb-2 text-xl"><strong>Doğum tarihi:</strong> {profile.dogumTarihi}</p>
                <p className="mb-2 text-xl"><strong>İkamet Şehri:</strong> {profile.sehir}</p>
                <p className="mb-2 text-xl"><strong>Eğitim Durumu:</strong> {profile.egitim}</p>
                <p className="mb-2 text-xl"><strong>Tercih Ettiği Rol:</strong> {profile.rol}</p>
            </div>

            <div className="">
                <img src="../src/assets/image 2.png" className="rounded-lg object-cover " />
            </div>

            <div className="w-2/4">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-white">{profile.hakkimda}</p>
            </div>
        </div>
    </div>
);

export default Profile;
