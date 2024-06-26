import Card from "../components/Card";

const serviceDetails = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    serviceName: "Residential Decoration",
    serviceDescription:
      "Create a cozy and inviting atmosphere in your home with our residential decoration services. We offer personalized design solutions that reflect your style and enhance your living space's comfort and beauty.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    serviceName: "Office Decoration",
    serviceDescription:
      "Transform your office space into a productive and aesthetically pleasing environment with our expert decoration services. We specialize in creating modern, functional, and stylish office designs that inspire and motivate.",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    serviceName: "E-commerce Decoration",
    serviceDescription:
      "Enhance your e-commerce store's look and feel with our specialized decoration services. From product displays to overall store ambiance, we ensure your online store captivates and retains customers, driving more sales and engagement.",
  },
  {
    imageURL:
      "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    serviceName: "Event Decoration",
    serviceDescription:
      "Make your events memorable with our professional decoration services. Whether it's a wedding, corporate event, or private party, we create stunning and unique designs that leave a lasting impression on your guests.",
  },
];

const Service = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold uppercase">Services</h1>
      <div className="m-auto flex w-4/5 flex-wrap gap-5 items-center justify-center">
        {serviceDetails.map((service) => (
          <Card data={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
