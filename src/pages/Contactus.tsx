interface ContactProps{
  onNavigate: (page: string) => void;
  title:string;
}

function Contactus({ title }:ContactProps) {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
      
    </div>
  );
}

export default Contactus;
