import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Nevil</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/?edit=2`}>
              <img src="https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/edit.png" alt="" />
            </Link>
            <img src="https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/delete.png" alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem adipisci pariatur deserunt harum! Veritatis deserunt accusantium, asperiores deleniti at perferendis in dicta sequi rem laborum distinctio sunt molestias molestiae laudantium.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis error perferendis, tempore, iste cumque quas quis nihil architecto, incidunt consequuntur ad numquam aperiam obcaecati. Unde velit fugit iste quidem natus.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam magni, praesentium dolor quos nemo voluptas officiis est, ullam quasi debitis, accusantium aspernatur nihil enim odit hic modi vitae corporis harum?
          <br /><br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo deleniti asperiores autem voluptatum corrupti esse magni eius molestias sunt! Neque totam voluptatum exercitationem sit deleniti, sapiente beatae nesciunt sed fugit!isicing elit. Quo deleniti asperiores autem voluptatum corrupti esse magni eius molestias sunt! Neque totam voluptatum exercitationem sit deleniti, sapiente beatae nesciunt sed fugit!
          <br /><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt, temporibus ex numquam dignissimos blanditiis esse nostrum alias, non ipsum quasi ipsam omnis tenetur magni adipisci soluta voluptatum facere distinctio odit nisi minima sed placeat! Adipisci, sequi et soluta ut, ducimus corporis sit minima optio a, minus unde illum consectetur.x numquam dignissimos blanditiis esse nostrum alias, non ipsum quasi ipsam omnis tenetur magni adipisci soluta voluptatum facere distinctio odit nisi minima sed placeat! Adipisci, sequi et soluta ut, ducimus corporis sit minima optio a, minus unde illum consectetur.
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>)
}

export default Single