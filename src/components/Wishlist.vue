<template>
  <div class="wishlist">
    <h1>My Wishlist</h1>

    <!-- Table View -->
    <table v-if="recommendedMovies.length" class="wishlist-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Poster</th>
          <th>Title</th>
          <th>Rating</th>
          <th>Release Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(movie, index) in recommendedMovies"
          :key="movie.id"
          class="wishlist-row"
        >
          <td>{{ index + 1 }}</td>
          <td>
            <div class="poster-container">
              <img
                :src="getPosterUrl(movie.poster_path)"
                :alt="movie.title"
                class="movie-poster"
              />
            </div>
          </td>
          <td class="movie-title">{{ movie.title }}</td>
          <td class="movie-rating">⭐ {{ movie.vote_average }}</td>
          <td class="movie-release">{{ movie.release_date }}</td>
          <td>
            <button @click="removeFromWishlist(movie)" class="remove-button">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- No Movies -->
    <div v-else class="empty-message">Your wishlist is empty.</div>
  </div>
</template>

<script>
export default {
  name: "MovieWishlist",
  data() {
    return {
      recommendedMovies: [], // 로컬 스토리지에서 불러온 데이터
    };
  },
  methods: {
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
    removeFromWishlist(movie) {
      this.recommendedMovies = this.recommendedMovies.filter(
        (m) => m.id !== movie.id
      );
      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      const saved = localStorage.getItem("recommendedMovies");
      if (saved) {
        this.recommendedMovies = JSON.parse(saved);
      }
    },
    saveToLocalStorage() {
      localStorage.setItem(
        "recommendedMovies",
        JSON.stringify(this.recommendedMovies)
      );
    },
  },
  created() {
    this.loadFromLocalStorage();
  },
};
</script>

<style scoped>
.wishlist {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.wishlist-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.wishlist-table th,
.wishlist-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.wishlist-table th {
  background-color: #4caf50;
  color: white;
}

.wishlist-row {
  background-color: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wishlist-row:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.poster-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.movie-poster {
  width: 60px;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.wishlist-row:hover .movie-poster {
  transform: scale(1.1);
}

.movie-title {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.movie-rating {
  color: #ff9800;
  font-weight: bold;
}

.movie-release {
  color: #757575;
}

.remove-button {
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #d32f2f;
}

.empty-message {
  text-align: center;
  font-size: 18px;
  color: #555;
  margin-top: 20px;
}
</style>
