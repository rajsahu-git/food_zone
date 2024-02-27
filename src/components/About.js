import {useState} from 'react'

const Element=({About_Page,About_description,setShow,Show})=>{
  return(
    <div>
      {About_Page}
      {Show && About_description}
      {Show ? (
      <button 
       onClick={()=>{setShow(false)}}
      className="px-5 p-1 ml-4 mt-4 mb-4 bg-orange-600 rounded-md text-white"
      >
        Hide
        </button>
        ): (
        <button onClick={()=>{setShow(true)}}

        className="px-5 p-1 ml-4 mt-4 mb-4 bg-orange-600 rounded-md text-white" 
        
        >Show
        </button>
        )}

    </div>
  )
}


const About = () => {
  const [Show, setShow] = useState("abc")
  return (
    <>
      <h1 className="text-center font-bold text-2xl">About</h1>
      <Element About_Page = {
        <h2  className="py-1 px-1 font-semibold text-xl">About FootZone</h2>
      } About_description = {<p className=" px-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ea
      ut, explicabo provident mollitia distinctio in numquam beatae quas
      temporibus, eveniet aut modi officiis nobis eligendi nulla consequuntur,
      cupiditate neque at! Adipisci ut, nemo asperiores accusamus error
      reprehenderit vero illum cupiditate aspernatur? Praesentium, amet autem
      consequuntur iusto minima nostrum alias repudiandae placeat laboriosam
      cupiditate deserunt asperiores soluta, quas sit molestias error.
      Corrupti in modi ipsum expedita culpa vero quidem facilis molestias
      temporibus ipsam? Quia ducimus numquam culpa dolorum, neque quo cum
      veritatis laudantium tempora ad doloribus corporis, libero amet et,
      minima iste repellendus voluptas ab eos nisi error eveniet
      reprehenderit.
      </p>} Show={Show==="about"} setShow={()=>{
        if(!(Show==="about")){
          setShow("about")
        }
        else{
          setShow("sdfa")
        }
       }}/>
      <Element About_Page={<h2 className="py-1 px-1 font-semibold text-xl">Abput Company Sell</h2>
} About_description={<p className="px-2">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
suscipit qui pariatur perferendis facere aperiam. Deserunt perspiciatis
vitae maxime architecto modi alias aut sed odio laudantium expedita enim
repellat dolorum, ipsam quo et labore quae omnis voluptatum delectus?
Nesciunt numquam, voluptate optio eos aspernatur sapiente explicabo!
Animi quaerat excepturi quod! Ab veritatis in consectetur?
Exercitationem, enim? Ipsum possimus ducimus corrupti exercitationem ab
distinctio cupiditate quam autem pariatur est, quis ad deleniti placeat
optio provident labore?
</p>
} Show={Show==="description" } setShow={()=>{
  if(Show==="about" || Show ==="team"||Show==="sdfa"||Show==="abc"){
    setShow("description")
  }
  else {
    setShow("sdfa")
  }
  }}/>
<Element About_Page={<h2 className="py-1 px-1 font-semibold text-xl">About Team</h2>
} About_description={<p className=" px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate soluta quis dolor placeat aliquid fugit dolores fugiat deleniti recusandae laborum eum debitis aut blanditiis itaque dolorum, expedita quod officia vitae. Error repellat, tempora exercitationem fugit incidunt iusto quasi eius cumque dolorem porro eaque illo sequi quidem vero unde ipsa, quisquam praesentium ex? Inventore dolores saepe alias iste maiores, sit labore nisi nemo nobis voluptatibus accusantium, consectetur minima reiciendis quasi esse?</p> 
} Show={Show==="team"} setShow={()=>{
  if(Show==="about" || Show ==="description"||Show==="sdfa"||Show==="abc"){
    setShow("team")
  }
  else{
    setShow("sdfa")
  }
  }} />
  </>
  );
};

export default About;
