const Profile = ({ profile }) => (
    <div>
        <div className="bg-blue-700 text-white p-10 rounded-lg">
            <h1 className="text-4xl font-bold">Profile</h1>
            <div className="mt-4">
                <h2 className="text-2xl">Basic Information</h2>
                <p>Doğum tarihi: {profile.dogumTarihi}</p>
                <p>İkamet Şehri: {profile.sehir}</p>
                <p>Eğitim Durumu: {profile.egitim}</p>
                <p>Tercih Ettiği Rol: {profile.rol}</p>
            </div>
        </div>
    </div>
)
export default Profile;