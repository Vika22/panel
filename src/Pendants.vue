<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="pod in silver" :key="pod.id">
          <article class="post">
            <img v-bind:src="pod.photo" />
            <h4>{{ pod.price }}</h4>
            <p>{{ pod.description }}</p>
            <router-link to="/buy">
              <a href="services.html" class="btn btn-round">Купить</a>
            </router-link>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Pendants",
  props: ["Pendants"],
  components: {},
  data: () => {
    return {
      pendants: "",
      silver: [
        {
          id: "1",
          price: "400 грн.",
          description: " Длина 39-42,5 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/89854978_1043646676006999_1580153751379285715_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=48iZHp_r4JAAX-RXUqS&oh=7a4f76de31810f785aed25654f2db08b&oe=5E9B569C"
        },
        {
          id: "2",
          price: " 380 грн.",
          description: " Длина регулируется 40-45 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/83947397_187517672322405_4501538180089854921_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=azSnewu6UNEAX-JINVI&oh=016db77a3d51f6e99c0c4f516a39d8f0&oe=5EA3E024"
        },
        {
          id: "3",
          price: " 420 грн.",
          description: " Длина 40 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/82998303_1404518796394860_268658700199288202_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=eOio6HGLvbYAX8u9HVW&oh=c976d903dae15775c685b35ae80140b1&oe=5E9E7F82"
        },
        {
          id: "4",
          price: " 380 грн.",
          description: " Длина регулируется 40-45 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/82045571_171705190779088_8266787338100759263_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=VuaLmYyvfPgAX_Gj5QS&oh=fe48198a9d490fc4076cf4fd4d5db736&oe=5E9CF5B5"
        },
        {
          id: "5",
          price: " 400 грн.",
          description: " Длина регулируется 36-40 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/82569729_101629311366679_6515959748393789250_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=zAsDCCr3soQAX_k6ZRj&oh=3a2380c1837923f98663dbaf5b5e628a&oe=5EA64172"
        },
        {
          id: "6",
          price: " 340 грн.",
          description: " Длина 38 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/80704070_2429850320587498_3396592892769277392_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=08c37CTLeZYAX_2Kir_&oh=1b2bb7a91b91b30ce71779e24b7f3b93&oe=5EA47870"
        },
        {
          id: "7",
          price: " 400 грн.",
          description: " Длина регулируется 40-45 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88128771_205682080672007_4041711138638214462_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=yB7OpJPoPn8AX-2r9Ro&oh=44dd2fddb27312d364b7aa33da39fe0a&oe=5EA0C320"
        },
        {
          id: "8",
          price: " 350 грн.",
          description: " Длина 40 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88220496_241946750295456_5315877722879718684_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ucq8XLHQo1IAX9-AENf&oh=fd5cf00dce19129e1a3477fa9d908e1d&oe=5EA70219"
        }
      ]
    };
  }
};
</script>

<style>
.post {
  border: 1px solid #e3e6ea;
  text-align: center;
  -webkit-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  padding: 10px;
  margin-top: 15vh;
}

.post img {
  margin-bottom: 15px;
  width: 100%;
  height: 30vh;
  object-fit: cover;
  object-position: center;
}

.post h4 {
  margin-bottom: 22px;
}

.post h4,
.post h4 a {
  color: #263a41;
  font-size: 22px;
}

.post p {
  font-size: 15px;
  margin-bottom: 39px;
}

.post .btn {
  background-color: #ffa573;
  margin-bottom: 30px;
  padding: 15px;
}

.post:hover {
  -webkit-box-shadow: 0 5px 20px #ff8540;
  box-shadow: 0 5px 20px #ff8540;
}

.post:hover .btn {
  background-color: #ff8540;
  color: #c6f9f4;
}
.post:hover {
  transform: scale(1.1);
}

.main {
  margin-left: 15vw;
}
</style>
