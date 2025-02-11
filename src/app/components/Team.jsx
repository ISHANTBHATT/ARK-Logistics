import React from "react";
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "David Carter",
      role: "Coordinator",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
      social: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Sarah Nguyen",
      role: "Customer Manager",
      image:
        "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      social: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "John Mitchell",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
      social: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Emma Davis",
      role: "Supervisor",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2576&ixlib=rb-4.0.3",
      social: {
        facebook: "#",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <h2 className="text-5xl font-bold">
          Meet Our Ultra Expert
          <br />
          Logistics Team
        </h2>
        <button className="text-red-600 hover:text-red-700 flex items-center gap-2 font-semibold">
          Read More
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                <div className="flex flex-col gap-2 absolute right-0 bottom-6 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 pr-6">
                  <a
                    href={member.social.facebook}
                    className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
