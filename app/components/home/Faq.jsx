const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="box-container">
          <div className="header">
            <h1>Frequently Asked Questions</h1>
            <p>Let&apos;s answer some of your questions.</p>
          </div>
          <ul className="accordion">
            <li>
              <input type="radio" name='accordion' id="first" />
              <label htmlFor="first">What are your operating hours?</label>
              <div className="content">
                <p>
                  Our operating hours are 11 AM - 08 PM. We're open 6 days of the week for lunch and dinner We closed on Sunday, so you can satisfy your hibachi cravings at your convenience.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Do you offer delivery?</label>
              <div className="content">
                <p>unfortunately, We don't offer delivery.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Is the food cooked in front of the guests?</label>
              <div className="content">
                <p>Yes, our skilled chefs will cook your meal right in front of you on our teppanyaki grills. Prepare to be entertained as they showcase their impressive knife skills and culinary artistry while you enjoy the sizzling sounds and enticing aromas.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="four" />
              <label htmlFor="four">Are vegetarian and gluten-free options available?</label>
              <div className="content">
                <p>Yes, we have vegetarian options available, including a variety of fresh vegetables and tofu. We also offer gluten-free sauces and can accommodate dietary restrictions. Please inform your server about any specific dietary needs, and our chefs will do their best to accommodate you.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="five" />
              <label htmlFor="five">Can I customize my meal?</label>
              <div className="content">
                <p>Absolutely! At Kansha Hibachi Express, we offer a wide selection of fresh ingredients, including proteins, vegetables, and sauces. You can customize your meal by choosing your preferred combination of ingredients to create a delicious and personalized hibachi dish.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="six" />
              <label htmlFor="six">What is hibachi cooking?</label>
              <div className="content">
                <p>Hibachi cooking is a traditional Japanese grilling technique where skilled chefs cook a variety of meats, seafood, and vegetables on a flat iron grill, known as a teppanyaki grill, right in front of the guests. It's an interactive and entertaining dining experience.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;