const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  //
  const phoneContainer = document.getElementById("phone-container");

  phones.forEach((phone) => {
    // console.log(phone);
    // create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
    // set inner htnl
    phoneCard.innerHTML = `
     <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Phone"
                class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    `;
    // append child
    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
