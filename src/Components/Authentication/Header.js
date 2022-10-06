import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";
export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  const [logoURL, setLogoURL] = useState("");
  const logoCollectionRef = collection(db, "utilities");

  useEffect(() => {
    const getLogo = async () => {
      const data = await getDocs(logoCollectionRef);
      setLogoURL(data.docs.map((doc) => doc.data().logoURL));
    };
    getLogo();
  }, [logoCollectionRef]);
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="" className="h-25 w-25" src={logoURL} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
