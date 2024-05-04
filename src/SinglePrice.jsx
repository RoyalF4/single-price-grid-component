export default function SinglePrice() {
  return (
    <div className="single-price">
      <div className="single-price__top-half">
        <h2>Join our community</h2>
        <h3 className="yellow-txt">30-day, hassle-free money back guarantee</h3>
        <p className="top-half__p">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="single-price__subscription">
        <h3>Monthly Subscription</h3>
        <span className="price-per">
          <span className="price-text">$29</span> per month
        </span>
        <p>Full access for less than $1 a day</p>
        <a className="btn-sign-up" href="">
          Sign Up
        </a>
      </div>
      <div className="single-price__why-us">
        <h3>Why Us</h3>
        <ul className="why-us__ul">
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  );
}
