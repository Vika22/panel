<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="pod in silver" :key="pod.id">
          <article class="post">
            <img v-bind:src="pod.photo" />
            <h4>{{ pod.price }}</h4>
            <p>{{ pod.description }}</p>
            <a href="services.html" class="btn btn-round">Узнать больше</a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earrings",
  components: {},
  data: () => {
    return {
      pendants: "",
      silver: [
        {
          id: "1",
          price: "270 грн.",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/89970735_244445266586221_3673965298340976340_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=FmW53wF2RHcAX_ZxVLh&oh=b9c2fe644504803eff33c5b68ffd7797&oe=5E9DC7AE"
        },
        {
          id: "2",
          price: " 250 грн.",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/89360253_668380220575215_5845119335738192560_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=_CFQ6fmyYT4AX-h-NO3&oh=dd1e8bb011bb4a39fa7c692d57479264&oe=5EA4A728"
        },
        {
          id: "3",
          price: " 250 грн.",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/89365102_552531445616760_7510488110671774265_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=KGJ3weEWLuoAX-yEQG1&oh=837945b447127dd70a36aa8c136ffae3&oe=5E9C1B9F"
        },
        {
          id: "4",
          price: " 220 грн.",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/84178391_675268936578757_8500115441145585036_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JBVJV6ynUiUAX-lk9Jz&oh=cc9df9ac435959ad77a43fafa5415439&oe=5EA48A55"
        },
        {
          id: "5",
          price: " 260 грн.",
          description: " Длина 8 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/88220292_218876412820276_9009257380826642516_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=X-HHYp_pQQ8AX9za5JR&oh=8b7df10425d67de78149024eef9d32dd&oe=5EA39FC0"
        },
        {
          id: "6",
          price: " 260 грн.",
          description: " Длина 11 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/87731147_102983651258280_9153476434252470375_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=1y7hDZ7O2psAX8SxO4R&oh=3233d84d637d9df6ba24dda698ea8a7d&oe=5E9FB6A2"
        },
        {
          id: "7",
          price: " 345 грн.",
          description: " Длина цепочки 7см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82178250_1026421907742696_6298944134958964768_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=focRftcHYgoAX-AL6Ze&oh=394cc829533ff875b9914fd6f320c799&oe=5EA5598E"
        },
        {
          id: "8",
          price: " 250 грн.",
          description: " Длина 9 см",
          photo:
            "https://instagram.fiev15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/81253866_469246993994787_8456935991394145443_n.jpg?_nc_ht=instagram.fiev15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=aV0bfh1DhSkAX_N99WC&oh=80c6cd270f65300c7215d701a4b845ff&oe=5EA3C116"
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
