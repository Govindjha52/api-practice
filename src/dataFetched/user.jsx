import { useEffect, useState } from "react";

function User() {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setuser(data.users));
    setloading(false);
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <>
      <div className="data-list">
        {user.map((p) => (
          <div key={p.id} className="data-card">
            <div className="user-card">
              <div className="pr">
                <div className="pr-im">
                <img src={p.image} alt="" />
                </div>
                
              </div>
              <div className="about"><br /><br />
                <b>id: {p.id}</b> <br />
                <br />
                <b>
                  Full Name: {`${p.firstName} ${p.maidenName} ${p.lastName}`}
                </b>
                <br />
                <h3>Age: {p.age}</h3>
                <h3>Blood gr: {p.bloodGroup}</h3>
                <h3>D.O.B: {p.birthDate}</h3>
                <h3>Gender: {p.gender}</h3>
                <h3 className="email">Email: {p.email}</h3>
                <h3>Phone: {p.phone}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default User;
