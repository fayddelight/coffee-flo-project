import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              saepe quis voluptatibus minus velit provident mollitia quisquam
              qui voluptatum voluptas aut dolore excepturi rerum recusandae
              sapiente, hic magnam asperiores officiis voluptate pariatur!
              Rerum, autem dolore. Animi sapiente labore quibusdam, magni
              inventore harum eligendi voluptatibus illum? Quibusdam atque
              molestiae suscipit eveniet.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
