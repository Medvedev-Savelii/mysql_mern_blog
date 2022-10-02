import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

const Single = () => {
  // const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const post = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://s1.1zoom.ru/big7/402/Fruit_Melons_Strawberry_Citrus_Peaches_524269_2560x1708.jpg",
    },
  ];

  return (
    <div className='single'>
      <div className='content'>
        <img
          src={
            "https://s1.1zoom.ru/big7/402/Fruit_Melons_Strawberry_Citrus_Peaches_524269_2560x1708.jpg"
          }
          alt='blablabla'
        />
        <div className='user'>
          <img
            src={
              "https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.6,z_0.7/r_max/co_black,e_outline/co_grey,e_shadow,x_40,y_55/actor.png"
            }
            alt=''
          />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          <div className='edit'>
            <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>{"Lorem ipsum dolor sit amet consectetur adipisicing elit"}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          tempore aperiam id repellat ad nisi quisquam. Repudiandae autem cum
          itaque quaerat atque similique iste totam aperiam soluta alias!
          Perspiciatis cum magnam, quam quasi similique soluta. Veritatis nam
          consectetur, quis ipsa fuga iure repellat nisi eius neque,
          necessitatibus ipsam, repellendus molestias iste sit aperiam corporis
          eos dicta! Quas, a quasi. Exercitationem sapiente animi repellat
          deleniti earum sed voluptatem minima cumque rerum. Molestias sed esse
          unde. Dolor perspiciatis omnis repellendus alias hic fugit, earum
          aliquam maiores sequi necessitatibus dicta eius pariatur consectetur
          nam iste voluptatum ducimus. Sint voluptates id fugiat quaerat
          voluptatibus culpa pariatur dolorum velit facilis ullam numquam qui
          rem, iusto libero quis adipisci? Molestias neque, non veritatis ea aut
          dolorem nostrum, odit distinctio et quae est ullam doloremque
          dignissimos minima dicta assumenda commodi atque labore fugiat
          doloribus adipisci repudiandae numquam temporibus quisquam! Corrupti
          provident repudiandae aperiam in enim aspernatur itaque tenetur!
          Debitis impedit praesentium esse nostrum numquam commodi suscipit vel
          eaque harum rem fugiat, in quae aliquam repellendus non sint dolorem
          veritatis laboriosam consequatur voluptatem? Vel fuga exercitationem a
          ea animi soluta, quis facilis iste nemo veniam vitae sequi corporis
          est illum molestiae velit earum quidem quibusdam dolorem voluptatibus
          ratione?
        </p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
