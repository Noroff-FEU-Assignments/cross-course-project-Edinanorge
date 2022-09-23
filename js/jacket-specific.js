const jacketSpecificContainer = document.querySelector(".section-jacket-specific");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const productId = prams.get("id");

const product = products.find(({ id }) => id == productId);

jacketSpecificContainer.innerHTML = `<div class="grid-2cols">
          <div class="images-container">
            <img class="image-01" src="${product.image}" alt="${product.name}" />
          </div>

          <div class="text-container">
            <a class="back-link" href="jackets.html"
              ><i class="fa-solid fa-arrow-left back-icon"></i>Back to our products</a
            >
            <h1 class="heading-primary">${product.name}</h1>
            <h2 class="price">${product.price} kr</h2>
            <ul class="description-list jacket-description-list">
              <li><i class="fa-solid fa-cloud-rain"></i>waterproof</li>
              <li><i class="fa-solid fa-wind"></i>windproof</li>
              <li><i class="fa-solid fa-recycle"></i>recycled material</li>
              <li><i class="fa-solid fa-check"></i>all activities</li>
            </ul>
            <p class="jacket-description">${product.description}</p>
            <p class="subheading">Size:</p>
            <div class="size">
              <div class="size-box">
                <input type="radio" id="small" name="color" value="small" checked />
                <div class="jacket-size"><label for="small"></label>${product.size[0]}</div>
              </div>

              <div class="size-box">
                <input type="radio" id="medium" name="color" value="medium" />
                <div class="jacket-size"><label for="medium"></label>${product.size[1]}</div>
              </div>

              <div class="size-box">
                <input type="radio" id="large" name="color" value="large" />
                <div class="jacket-size"><label for="large"></label>${product.size[2]}</div>
              </div>

              <div class="size-box">
                <input type="radio" id="extra-large" name="color" value="extra-large" />
                <div class="jacket-size"><label for="extra-large"></label>${product.size[3]}</div>
              </div>

              
            </div>

            <a href="cart.html?id=${productId}" class="btn-cta btn-buy">Add to cart</a>
          </div>
        </div> 
        
        <div class="extra-info">
          <p><i class="fa-solid fa-truck"></i>Free delivery</p>
          <p><i class="fa-solid fa-arrow-right-arrow-left"></i>30 days free return</p>
          <p><i class="fa-solid fa-money-bill-1"></i>Money-back guarantee</p>
        </div>`;
