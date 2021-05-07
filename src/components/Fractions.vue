<template> 

  <div id="quiz-container"> 
    <hr class="my-3" />
    <mdb-container >
    <mdb-row>

      <!-- first column contains the quizzes -->
      <mdb-col class="text-center" col="sm">
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle gradient="aqua-gradient mx-auto" tag="a" slot="toggle" waves-fixed>Categories</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item  @click="showAlgebra = true" >Algebra</mdb-dropdown-item>
            <mdb-dropdown-item>Geometry</mdb-dropdown-item>
            <mdb-dropdown-item @click="showAlgebra = true">Fractions</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      <mdb-btn-group v-show="showAlgebra" vertical>
      <mdb-btn gradient="aqua-gradient color-block-5 mx-auto" class="mb-0" v-on:click="fetchQuestions(1)" @click="showAlgebra = false">Take Quiz 1</mdb-btn>
      <mdb-btn gradient="aqua-gradient color-block-5 mx-auto" class="mb-0" v-on:click="fetchQuestions(0)" @click="showAlgebra = false">Take Quiz 2</mdb-btn>
      </mdb-btn-group>
    </mdb-col>
    <mdb-col class="text-center" col="sm"><img v-bind:src="loading ? ' ' : currentQuestion.question" v-bind:alt="pic">
      <div v-if ="!isHidden">
      <h1>Explanation goes Here!</h1>
      <img v-bind:src="loading ? ' ' : currentQuestion.solution" v-bind:alt="pic"> 
      <iframe class="embed-responsive-item" allowfullscreen autoplay loop controls muted v-animateOnScroll="'rollIn'" v-bind:src="loading ? ' ' : currentQuestion.videoId" v-bind:alt="url"> </iframe>     
        
      </div>   
    </mdb-col>

    <!-- this third column contains the mulitple choices and the next and explanation button -->
    <mdb-col class="text-center" col="sm"> 
      <div >
        <mdb-card>
          <mdb-view gradient="blue-gradient color-block-5 mb-3 mx-auto" cascade> <p></p></mdb-view>
          <mdb-card-body class="text-center">            
            <div >
            You have
              <strong>{{ correctAnswers }} correct {{ pluralizeAnswer }}!</strong>
            </div>

            <div >
              Currently at question {{ index + 1 }} of {{ questions.length }}  
            </div>
            <mdb-card-title></mdb-card-title>
            <mdb-card-text></mdb-card-text>             
          </mdb-card-body>
          <mdb-view gradient="blue-gradient color-block-5 mb-3 mx-auto" cascade> <p></p></mdb-view>
        </mdb-card>                       
    <mdb-view gradient="deep-blue-gradient color-block-5 mb-3 mx-auto" cascade> <p></p></mdb-view>
    <form v-if="currentQuestion">
      <!-- <mdb-btn color="#f3e5f5 purple lighten-5"><button v-for="answer in currentQuestion.answers"
        class = "button"
        :index="currentQuestion.key"
        :key="answer"
        v-html="answer"
        @click.prevent="handleButtonClick"
        @click="showPopup = true"></button></mdb-btn>       -->
        <button class = "button"
          v-for="answer in currentQuestion.answers"
          :index="currentQuestion.key"
          :key="answer"
          v-html="answer"
         @click.prevent="handleButtonClick"
         @click="showPopup = true"
        ></button>
      </form>
       <hr class="my-3" />
     <mdb-view gradient="deep-blue-gradient color-block-5 mb-3 mx-auto" cascade> <p></p></mdb-view>

     <mdb-btn-group vertical>
      <mdb-btn 
        gradient="purple" 
        class="mb-0" v-on:click="next()"
        v-show="showPopup">
        continue
      </mdb-btn>

      <mdb-btn         
        gradient="purple" 
        class="mb-0" 
        v-show="showPopup"
        v-on:click="isHidden = !isHidden" >{{ isHidden ? 'Show Explanation' : 'Hide Explanation' }}
      </mdb-btn>
    </mdb-btn-group>
    <!-- <button id= "cont" v-on:click="next()"
      v-show="showPopup"
      >continue</button>
      <button id="showExplanationButton"  
    v-show="showPopup"
    v-on:click="isHidden = !isHidden" >{{ isHidden ? 'Show Explanation' : 'Hide Explanation' }} </button> -->
        </div>
      </mdb-col>
  </mdb-row>
  </mdb-container>               
  <!-- Other elements here -->
<!-- <div class = "question">                           
</div> -->
 
  
  </div>
</template>
<script> 
import { mdbBtn, mdbBtnGroup, mdbContainer, mdbRow, mdbCol, animateOnScroll, mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbView, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem} from 'mdbvue';
export default {
  name: "Quiz", 
  components: {
      mdbContainer, 
      mdbRow, 
      mdbCol,
      mdbBtn,
      mdbBtnGroup,
      mdbCard,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
      mdbView,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
        }, 
        directives: {
      animateOnScroll
    }, 
  data() {
    return {      
      questions: [],
      loading: true,
      index: 0,
      //to show and hide the explanation
      isHidden: true,
      //nextQuestions: true
      isActive: true,
      showPopup: false,
      showAlgebra: false,
     // solu: Object
      
   };
  },
  computed: {
    currentQuestion() {
      if (this.questions !== []) {
        return this.questions[this.index];
      }
      return null;
    },
    score() {
      if (this.questions !== []) {
        // Here, we want to collect data in an object about the users statistics - later be emitted on an event when users finishes quiz
        return {
          allQuestions: this.questions.length,
          answeredQuestions: this.questions.reduce((count, currentQuestion) => {
            if (currentQuestion.userAnswer) {
              // userAnswer is set when user has answered a question, no matter if right or wrong
              count++;
            }
            return count;
          }, 0),
          correctlyAnsweredQuestions: this.questions.reduce(
            (count, currentQuestion) => {
              if (currentQuestion.rightAnswer) {
                // rightAnswer is true, if user answered correctly
                count++;
              }
              return count;
            },
            0
          ),
        };
      } else {
        return {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        };
      }
    },
    correctAnswers() {
      if (this.questions && this.questions.length > 0) {
        let streakCounter = 0;
        this.questions.forEach(function(question) {
          if (!question.rightAnswer) {
            return;
          } else if (question.rightAnswer === true) {
            streakCounter++;
          }
        });
        return streakCounter;
      } else {
        return "--";
      }
    },
    pluralizeAnswer() {
      // For grammatical correctness
      return this.correctAnswers === 1 ? "Answer" : "Answers";
    },
    quizCompleted() {
      if (this.questions.length === 0) {
        return false;
      }
      /* Check if all questions have been answered */
      let questionsAnswered = 0;
      this.questions.forEach(function(question) {
        question.rightAnswer !== null ? questionsAnswered++ : null;
      });
      return questionsAnswered === this.questions.length;
    },
  },
  watch: {
    quizCompleted(completed) {
      /*
       * Watcher on quizCompleted fires event "quiz-completed"
       * up to parent App.vue component when completed parameter
       * returned by quizCompleted computed property true
       */
      completed &&
        setTimeout(() => {
          this.$emit("quiz-completed", this.score);
        }, 3000); // wait 3 seconds until button animation is over
    },
  },
  methods: {
    async fetchQuestions(quizId) {

       let url = "http://localhost:3333/questions/";

      this.loading = true;
      let response = await fetch(       
        url
      );
      

      let jsonResponse = [];
      jsonResponse = await response.json();
      let index = 0; // index is used to identify single answer
      
      
      let data = jsonResponse[quizId].results.map((question) => {
      // Solutions.Solution = [question.videoId, question.Solution];
        question.answers = [          
          question.correct_answer,
          ...question.incorrect_answers,
        ];
      //console.log(question.solution)
      
        
        /* Shuffle question.answers array */
        for (let i = question.answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [question.answers[i], question.answers[j]] = [
            question.answers[j],
            question.answers[i],
          ];
        }
        // mention in Step 1
       
        question.rightAnswer = null;
        question.key = index;
        index++;
        return question;
      });
      this.solu = jsonResponse[quizId].results.solution
      
      this.questions = data;
      this.loading = false;
    },
    handleButtonClick: function(event) {
      /* Find index to identify question object in data */
      let index = event.target.getAttribute("index");
      let pollutedUserAnswer = event.target.innerHTML; // innerHTML is polluted with decoded HTML entities e.g ' from &#039;
      /* Clear from pollution with ' */
      let userAnswer = pollutedUserAnswer.replace(/'/, "&#039;");

      /* Set userAnswer on question object in data */
      this.questions[index].userAnswer = userAnswer;

      /* Set class "clicked" on button with userAnswer -> for CSS Styles; Disable other sibling buttons */
      event.target.classList.add("clicked");
      let allButtons = document.querySelectorAll(`[index="${index}"]`);

      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === event.target) continue;

        allButtons[i].setAttribute("disable", "");
      }
     
      /* Invoke checkAnswer to check Answer */
       this.checkAnswer(event, index);
      
    },  

    checkAnswer: function(event, index) {
      let question = this.questions[index];
      if (question.userAnswer) {
        if (question.userAnswer === question.correct_answer) {
          /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
          event.target.classList.add("rightAnswer");
          /* Set rightAnswer on question to true, computed property can track a streak out of 10 questions */
          this.questions[index].rightAnswer = true;
          //question.correct_answer
         
          // this.questions[index].correct_answer = null;
          
        } else {
          /* Mark users answer as wrong answer */
          event.target.classList.add("wrongAnswer");
          this.questions[index].rightAnswer = false;
          /* Show right Answer */
          let correctAnswer = this.questions[index].correct_answer;
          let allButtons = document.querySelectorAll(`[index="${index}"]`);
          allButtons.forEach(function(button) {
            if (button.innerHTML === correctAnswer) {
              button.classList.add("showRightAnswer");
            }
          });
        }
      

      }
    },
    el: '#cont',
   next: function () {
      
        if (this.index < this.questions.length - 1) {
          setTimeout(
            function() {
              this.index += 1;
              this.showPopup = false
            }.bind(this),
            500,
          );
        }
      
    },
     explanations() {

       console.log(this.question.solution)
     },
  },
  mounted() {
    this.fetchQuestions();
  },

}
</script>
<style>
.button {
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.3rem;
  width: 40%;
  background-color: rgba(100, 100, 100, 0.3);
  border: none;
  border-radius: 0.4rem;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
}

/* h1 {
  font-size: 1.3rem;
  padding: 0.7rem;
} */

/* form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
} */

/* button:hover:enabled {
  transform: scale(1.02);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
} */

button:focus {
  outline: none;
}

/* button:active:enabled {
  transform: scale(1.05);
} */

/* @keyframes flashButton {
  0% {
    opacity: 1;
    transform: scale(1.01);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
} */

/* button.clicked {
  pointer-events: none;
} */

button.rightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

button.wrongAnswer {
  color: black;
  background: linear-gradient(
    210deg,
    rgba(245, 0, 87, 0.25),
    rgba(245, 0, 87, 0.5)
  );
}

button.showRightAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 2;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

/* .column a:hover:enabled {
  transform: scale(1.02);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
} */

/* .column a:focus {
  outline: none;
}

.column a:active:enabled {
  transform: scale(1.05);
} */

  /* h3 {
    margin-bottom: 5%;
  } */
</style>