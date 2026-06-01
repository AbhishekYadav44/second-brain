import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate()
  const Links = [
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Services",
      href: "#",
    },
    {
      title: "Docs",
      href: "#",
    },
  ];

  const token = localStorage.getItem('token')
  function handleauth(){
      
    if(token){
        localStorage.removeItem('token')
        navigate('/')
    }else{
        navigate('/signin')
    }

  }

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center py-8">
      <div className="font-bold font-serif text-2xl">
        Recally
      </div>

      <div className="flex items-center gap-20">
        <div className="flex gap-10">
          {Links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-zinc-700 hover:text-black transition"
            >
              {item.title}
            </a>
          ))}
        </div>

        <button onClick={handleauth} className="bg-black text-white px-6 py-2 rounded-xl hover:scale-105 transition">
         {token ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}