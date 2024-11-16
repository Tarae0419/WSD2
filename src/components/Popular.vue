<template>
  <div class="popular">
    <h1>Popular Movies</h1>
    <!-- Table View -->
    <div class="table-view">
      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in currentPageMovies" :key="movie.id">
            <td>
              <img :src="getPosterUrl(movie.poster_path)" :alt="movie.title" />
            </td>
            <td>{{ movie.title }}</td>
            <td>{{ movie.release_date }}</td>
            <td>{{ movie.vote_average }}</td>
          </tr>
        </tbody>
      </table>
      <!-- Pagination -->
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="prevPage">
          Previous
        </button>
        <span>Page {{ currentPage }}</span>
        <button :disabled="currentPage === totalPages" @click="nextPage">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularMovies",
  data() {
    return {
      movies: [], // 영화 데이터 저장
      currentPage: 1, // 현재 페이지
      totalPages: 0, // 총 페이지 수
      moviesPerPage: 10, // 페이지 당 영화 수
    };
  },
  computed: {
    // 현재 페이지에 표시할 영화 데이터 계산
    currentPageMovies() {
      const start = (this.currentPage - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies.slice(start, end);
    },
  },
  methods: {
    // API에서 영화 데이터 로드
    async fetchMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "338afe18473748636f29d4cb0fedaa87",
          },
        }
      );
      this.movies = response.data.results;
      this.totalPages = Math.ceil(this.movies.length / this.moviesPerPage);
    },
    // 이전 페이지로 이동
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // 영화 포스터 URL 생성
    getPosterUrl(path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
  },
  async created() {
    await this.fetchMovies();
  },
};
</script>

<style scoped>
.popular {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.table-view table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

.table-view th,
.table-view td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.table-view th {
  background-color: #f4f4f4;
}

.table-view td img {
  width: 100px;
  border-radius: 8px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #2069ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 18px;
}
</style>
