import featuredArt from "../assets/turtle_art.jpeg";

export default function Hobbies() {
  return (
    <section id="hobbies">
      <h2>Hobbies & Me</h2>
        <img
        src={featuredArt}
        alt="Featured artwork"
        className="featured-art"
      />

      <p>
       I have been drawn to the visual arts since childhood and have explored a wide range of creative mediums over the years. My preferred forms of expression include watercolor, acrylics, gouache, charcoal sketching, ink work, and sculpture using wood, clay, and stone. Alongside visual art, music has been a constant presence in my life. I am a trained Carnatic classical singer, having studied the form for nearly two decades. I also play the violin and was an active participant in my school choir, experiences that shaped both my discipline and artistic sensitivity. Sports and physical training have played an equally important role in my life. I was a competitive sprinter, winning multiple inter-school and district-level competitions. I have always been eager to challenge myself physically and mentally—training for mini marathons, practicing yoga, swimming, and working on core strength, with a long-standing goal of learning to surf. I genuinely enjoy the process of trying new things for the first time; the excitement of discovery and growth is something I actively seek out. Beyond this, I spend time on personal art projects, explore my cultural roots, and study Sanskrit. I am an avid reader of fiction, with P. G. Wodehouse being my go-to for lighthearted reading. Other favorites include Crime and Punishment, Atlas Shrugged, and The Book Thief. Poetry holds a special place for me as well—Ozymandias by Percy Bysshe Shelley and Character by William Wordsworth are particular favorites. I write poetry myself and have participated in poetry competitions, finding the form both reflective and grounding.
      </p>

      <div className="identity-bubbles">
  <span className="identity-bubble">Art</span>
  <span className="identity-bubble">Engineering</span>
  <span className="identity-bubble">Maths</span>
  <span className="identity-bubble">Physics</span>
  <span className="identity-bubble">Poetry</span>
  <span className="identity-bubble">Violin</span>
  <span className="identity-bubble">Midnight sprints</span>
  <span className="identity-bubble">Service</span>
  <span className="identity-bubble">Yoga and Meditation</span>
</div>

      

      
    </section>
  );
}
