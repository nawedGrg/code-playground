import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    "hero.badge": "Interactive Learning",
    "hero.title.learn": "Learn",
    "hero.title.javascript": "JavaScript",
    "hero.title.byDoing": "by Doing",
    "hero.description": "Stop just reading code. Start clicking, trying, and playing with it! Learn JavaScript through 7 interactive lessons that respond to your actions.",
    "hero.cta": "Start Learning",
    "hero.noSignup": "No signup required • 100% free",
    "hero.lessons": "Lessons",
    "hero.practice": "Practice",
    "hero.miniGame": "Mini Game",
    "hero.scrollToStart": "Scroll to start",

    // Navigation
    "section.clickEvents": "Click Events",
    "section.variables": "Variables",
    "section.dom": "DOM",
    "section.input": "Input",
    "section.conditions": "If/Else",
    "section.loops": "Loops",
    "section.game": "Game",

    // Click Events Section
    "click.title": "Click Events",
    "click.explanation": "A <strong>click event</strong> is how JavaScript knows when you click something. It's like teaching your webpage to listen for clicks and do something in response!",
    "click.demoActive": "You clicked! Count:",
    "click.demoInactive": "Click \"Try it!\" above to see a click event in action",
    "click.code": `// This is a comment - it helps explain the code
// Click events let JavaScript respond when you click something

// First, we find a button on the page
let myButton = document.getElementById("myButton");

// Then we tell it what to do when clicked
myButton.addEventListener("click", function() {
  alert("You clicked me!");
});`,
    "click.quiz1.question": "What does addEventListener do?",
    "click.quiz1.opt1": "Makes the page colorful",
    "click.quiz1.opt2": "Waits for something to happen (like a click)",
    "click.quiz1.opt3": "Deletes an element",
    "click.quiz1.opt4": "Creates a new button",
    "click.quiz2.question": "What happens when you click a button with a click event?",
    "click.quiz2.opt1": "Nothing",
    "click.quiz2.opt2": "The page refreshes",
    "click.quiz2.opt3": "The code inside the function runs",
    "click.quiz2.opt4": "The button disappears",

    // Variables Section
    "var.title": "Variables (let)",
    "var.explanation": "<strong>Variables</strong> are like labeled boxes that store information. Use <code>let</code> to create a box, then give it a name and put something inside!",
    "var.demoSuccess": "Variables created! They hold your data.",
    "var.demoInactive": "Click \"Try it!\" to see variables being created",
    "var.code": `// Variables are like boxes that store information
// We use "let" to create a variable

let name = "Alex";     // This stores text (a "string")
let age = 25;          // This stores a number
let isHappy = true;    // This stores true or false (a "boolean")

// You can change variables later:
age = 26;  // Now age is 26!

// You can also use the variable:
console.log("Hello, " + name);  // Shows: Hello, Alex`,
    "var.quiz1.question": "What keyword do we use to create a variable?",
    "var.quiz1.opt1": "var",
    "var.quiz1.opt2": "let",
    "var.quiz1.opt3": "new",
    "var.quiz1.opt4": "create",
    "var.quiz2.question": "What type of data is \"Hello\"?",
    "var.quiz2.opt1": "Number",
    "var.quiz2.opt2": "Boolean",
    "var.quiz2.opt3": "String",
    "var.quiz2.opt4": "Array",
    "var.quiz3.question": "What is stored in: let isActive = true;",
    "var.quiz3.opt1": "A string",
    "var.quiz3.opt2": "A number",
    "var.quiz3.opt3": "A boolean",
    "var.quiz3.opt4": "An object",

    // DOM Section
    "dom.title": "Changing Text (DOM)",
    "dom.explanation": "The <strong>DOM</strong> (Document Object Model) is how JavaScript sees your webpage. With it, you can find any element and change its text, color, or style!",
    "dom.helloWorld": "Hello, World!",
    "dom.textChanged": "↑ This text was changed with JavaScript!",
    "dom.randomText1": "JavaScript is awesome! 🚀",
    "dom.randomText2": "You changed the DOM! ✨",
    "dom.randomText3": "Magic happening here! 🎩",
    "dom.randomText4": "Keep learning! 📚",
    "dom.code": `// The DOM is how JavaScript "sees" your webpage
// We can find and change any part of the page!

// Find an element by its ID
let heading = document.getElementById("myHeading");

// Change its text
heading.textContent = "New Text Here!";

// You can also change colors:
heading.style.color = "orange";

// Or add new content:
heading.innerHTML = "<strong>Bold text!</strong>";`,
    "dom.quiz1.question": "What does DOM stand for?",
    "dom.quiz1.opt1": "Data Object Model",
    "dom.quiz1.opt2": "Document Object Model",
    "dom.quiz1.opt3": "Digital Online Mode",
    "dom.quiz1.opt4": "Display Output Manager",
    "dom.quiz2.question": "Which method finds an element by its ID?",
    "dom.quiz2.opt1": "findElement()",
    "dom.quiz2.opt2": "getElementById()",
    "dom.quiz2.opt3": "searchById()",
    "dom.quiz2.opt4": "locateElement()",
    "dom.quiz3.question": "What property changes the text inside an element?",
    "dom.quiz3.opt1": "innerHTML",
    "dom.quiz3.opt2": "textContent",
    "dom.quiz3.opt3": "Both can work",
    "dom.quiz3.opt4": "Neither",

    // User Input Section
    "input.title": "User Input",
    "input.explanation": "JavaScript can read what users type in text boxes! This is how forms, search bars, and interactive apps work. We use <code>.value</code> to get the text.",
    "input.tryItYourself": "Try it yourself:",
    "input.placeholder": "Enter your name...",
    "input.sayHello": "Say Hello!",
    "input.greeting": "Hello, {name}! Welcome to JavaScript! 👋",
    "input.pleaseEnter": "Please enter your name first!",
    "input.code": `// Getting input from users is super useful!
// First, we need an input field and a button in HTML

// In JavaScript, we get the value like this:
let nameInput = document.getElementById("nameInput");
let userButton = document.getElementById("greetButton");

userButton.addEventListener("click", function() {
  // Get what the user typed
  let userName = nameInput.value;
  
  // Use it to create a greeting
  let message = "Hello, " + userName + "!";
  
  // Show the greeting
  alert(message);
});`,
    "input.quiz1.question": "How do you get what a user typed in an input field?",
    "input.quiz1.opt1": "input.text",
    "input.quiz1.opt2": "input.value",
    "input.quiz1.opt3": "input.content",
    "input.quiz1.opt4": "input.data",
    "input.quiz2.question": "What does the + operator do with strings?",
    "input.quiz2.opt1": "Adds numbers",
    "input.quiz2.opt2": "Joins text together",
    "input.quiz2.opt3": "Subtracts",
    "input.quiz2.opt4": "Multiplies",

    // Conditions Section
    "cond.title": "If / Else Conditions",
    "cond.explanation": "<strong>Conditions</strong> let your code make decisions. Use <code>if</code> to check something, and <code>else</code> for what happens if it's not true.",
    "cond.randomGenerated": "Random number generated:",
    "cond.checking": "Checking:",
    "cond.high": "High number! 🎯",
    "cond.low": "Low number! 📉",
    "cond.demoInactive": "Click \"Try it!\" to see a condition in action with a random number",
    "cond.code": `// Conditions let your code make decisions!
// "if" checks if something is true

let age = 18;

if (age >= 18) {
  // This runs if age is 18 or more
  console.log("You are an adult!");
} else {
  // This runs if age is less than 18
  console.log("You are a minor.");
}

// You can check many things:
// age > 18   means "greater than 18"
// age < 18   means "less than 18"
// age === 18 means "exactly equal to 18"
// age !== 18 means "not equal to 18"`,
    "cond.quiz1.question": "What does === mean in JavaScript?",
    "cond.quiz1.opt1": "Less than",
    "cond.quiz1.opt2": "Greater than",
    "cond.quiz1.opt3": "Exactly equal to",
    "cond.quiz1.opt4": "Not equal to",
    "cond.quiz2.question": "When does the 'else' block run?",
    "cond.quiz2.opt1": "Always",
    "cond.quiz2.opt2": "When the if condition is true",
    "cond.quiz2.opt3": "When the if condition is false",
    "cond.quiz2.opt4": "Never",
    "cond.quiz3.question": "What does >= mean?",
    "cond.quiz3.opt1": "Greater than",
    "cond.quiz3.opt2": "Less than",
    "cond.quiz3.opt3": "Greater than or equal to",
    "cond.quiz3.opt4": "Not equal",

    // Loops Section
    "loop.title": "For Loops",
    "loop.explanation": "<strong>Loops</strong> repeat code automatically. Instead of writing the same code 100 times, you write it once and let the loop repeat it!",
    "loop.demoSuccess": "Loop created 5 boxes! 🎉",
    "loop.demoInactive": "Click \"Try it!\" to see a loop create 5 boxes",
    "loop.code": `// Loops repeat code multiple times
// "for" loops are perfect when you know how many times

for (let i = 1; i <= 5; i++) {
  console.log("Box number " + i);
}

// How it works:
// let i = 1     → Start at 1
// i <= 5        → Keep going while i is 5 or less
// i++           → Add 1 to i after each loop

// This prints:
// Box number 1
// Box number 2
// Box number 3
// Box number 4
// Box number 5`,
    "loop.quiz1.question": "What does i++ do in a for loop?",
    "loop.quiz1.opt1": "Subtracts 1 from i",
    "loop.quiz1.opt2": "Adds 1 to i",
    "loop.quiz1.opt3": "Multiplies i by 2",
    "loop.quiz1.opt4": "Resets i to 0",
    "loop.quiz2.question": "In 'for (let i = 0; i < 3; i++)', how many times does the loop run?",
    "loop.quiz2.opt1": "2 times",
    "loop.quiz2.opt2": "3 times",
    "loop.quiz2.opt3": "4 times",
    "loop.quiz2.opt4": "0 times",
    "loop.quiz3.question": "What is the purpose of loops?",
    "loop.quiz3.opt1": "To make code run once",
    "loop.quiz3.opt2": "To repeat code multiple times",
    "loop.quiz3.opt3": "To stop the program",
    "loop.quiz3.opt4": "To create variables",

    // Mini Game Section
    "game.title": "Mini Game: Click Challenge!",
    "game.explanation": "Time to put it all together! This game uses <strong>click events</strong>, <strong>variables</strong>, <strong>DOM manipulation</strong>, and <strong>conditions</strong>. Click the orange circle as many times as you can!",
    "game.score": "Score",
    "game.time": "Time",
    "game.highScore": "High Score",
    "game.gameOver": "Game Over!",
    "game.youScored": "You scored:",
    "game.playAgain": "Play Again",
    "game.instructions": "Click the orange circles as fast as you can!",
    "game.startGame": "Start Game",
    "game.code": `// This mini game uses everything we learned!

// Variables to track the game
let score = 0;
let timeLeft = 10;

// Click event on the target
target.addEventListener("click", function() {
  score = score + 1;           // Add 1 to score
  moveTarget();                // Move to new position
});

// Timer using setInterval (runs every 1 second)
setInterval(function() {
  timeLeft = timeLeft - 1;     // Subtract 1 from time
  
  if (timeLeft <= 0) {         // Condition: time up?
    endGame();
  }
}, 1000);

// Moving the target uses random numbers and DOM`,
    "game.quiz1.question": "What JavaScript concept is used to track points in the game?",
    "game.quiz1.opt1": "Loops",
    "game.quiz1.opt2": "Variables",
    "game.quiz1.opt3": "HTML",
    "game.quiz1.opt4": "CSS",
    "game.quiz2.question": "What runs every 1000 milliseconds (1 second) in the game?",
    "game.quiz2.opt1": "Click event",
    "game.quiz2.opt2": "For loop",
    "game.quiz2.opt3": "setInterval timer",
    "game.quiz2.opt4": "If statement",
    "game.quiz3.question": "Which concepts from this course does the mini game use?",
    "game.quiz3.opt1": "Only variables",
    "game.quiz3.opt2": "Only click events",
    "game.quiz3.opt3": "Only loops",
    "game.quiz3.opt4": "Variables, events, conditions, and DOM",

    // Footer
    "footer.congrats": "Congratulations! 🎉",
    "footer.completed": "You've completed all 7 JavaScript lessons. Keep practicing and building!",
    "footer.madeWith": "Made with",
    "footer.forBeginners": "for beginners",

    // Quiz
    "quiz.title": "Quick Quiz",
    "quiz.complete": "Quiz Complete!",
    "quiz.gotCorrect": "You got",
    "quiz.outOf": "out of",
    "quiz.correct": "correct",
    "quiz.tryAgain": "Try Again",
    "quiz.nextQuestion": "Next Question",
    "quiz.seeResults": "See Results",

    // Code Block
    "tryIt": "Try it!",
  },
  ja: {
    // Hero Section
    "hero.badge": "インタラクティブ学習",
    "hero.title.learn": "",
    "hero.title.javascript": "JavaScript",
    "hero.title.byDoing": "を実践で学ぼう",
    "hero.description": "コードを読むだけではなく、クリックして、試して、遊んでみよう！7つのインタラクティブなレッスンで、実際に動かしながらJavaScriptを学べます。",
    "hero.cta": "学習を始める",
    "hero.noSignup": "登録不要 • 完全無料",
    "hero.lessons": "レッスン",
    "hero.practice": "練習",
    "hero.miniGame": "ミニゲーム",
    "hero.scrollToStart": "スクロールして開始",

    // Navigation
    "section.clickEvents": "クリック",
    "section.variables": "変数",
    "section.dom": "DOM",
    "section.input": "入力",
    "section.conditions": "条件分岐",
    "section.loops": "ループ",
    "section.game": "ゲーム",

    // Click Events Section
    "click.title": "クリックイベント",
    "click.explanation": "<strong>クリックイベント</strong>は、JavaScriptがクリックを検知する方法です。ウェブページにクリックを「聞く」ことを教え、それに応じて何かをさせることができます！",
    "click.demoActive": "クリックしました！回数：",
    "click.demoInactive": "上の「試してみる！」をクリックして、クリックイベントを体験しよう",
    "click.code": `// これはコメント - コードの説明に使います
// クリックイベントでJavaScriptはクリックに反応できます

// まず、ページ上のボタンを見つけます
let myButton = document.getElementById("myButton");

// 次に、クリックされた時に何をするか教えます
myButton.addEventListener("click", function() {
  alert("クリックされました！");
});`,
    "click.quiz1.question": "addEventListenerは何をしますか？",
    "click.quiz1.opt1": "ページをカラフルにする",
    "click.quiz1.opt2": "何かが起こるのを待つ（クリックなど）",
    "click.quiz1.opt3": "要素を削除する",
    "click.quiz1.opt4": "新しいボタンを作る",
    "click.quiz2.question": "クリックイベントのあるボタンをクリックすると何が起こる？",
    "click.quiz2.opt1": "何も起こらない",
    "click.quiz2.opt2": "ページが更新される",
    "click.quiz2.opt3": "関数の中のコードが実行される",
    "click.quiz2.opt4": "ボタンが消える",

    // Variables Section
    "var.title": "変数 (let)",
    "var.explanation": "<strong>変数</strong>は情報を保存するラベル付きの箱のようなものです。<code>let</code>を使って箱を作り、名前を付けて中に何かを入れましょう！",
    "var.demoSuccess": "変数が作成されました！データを保持しています。",
    "var.demoInactive": "「試してみる！」をクリックして変数の作成を見よう",
    "var.code": `// 変数は情報を保存する箱のようなものです
// "let"を使って変数を作ります

let name = "太郎";     // これはテキスト（「文字列」）を保存します
let age = 25;          // これは数値を保存します
let isHappy = true;    // これはtrueまたはfalse（「ブール値」）を保存します

// 後で変数を変更できます：
age = 26;  // これでageは26になりました！

// 変数を使うこともできます：
console.log("こんにちは、" + name);  // 表示: こんにちは、太郎`,
    "var.quiz1.question": "変数を作るためにどのキーワードを使いますか？",
    "var.quiz1.opt1": "var",
    "var.quiz1.opt2": "let",
    "var.quiz1.opt3": "new",
    "var.quiz1.opt4": "create",
    "var.quiz2.question": "\"こんにちは\"はどのデータ型ですか？",
    "var.quiz2.opt1": "数値",
    "var.quiz2.opt2": "ブール値",
    "var.quiz2.opt3": "文字列",
    "var.quiz2.opt4": "配列",
    "var.quiz3.question": "let isActive = true; には何が保存されていますか？",
    "var.quiz3.opt1": "文字列",
    "var.quiz3.opt2": "数値",
    "var.quiz3.opt3": "ブール値",
    "var.quiz3.opt4": "オブジェクト",

    // DOM Section
    "dom.title": "テキストの変更 (DOM)",
    "dom.explanation": "<strong>DOM</strong>（Document Object Model）は、JavaScriptがウェブページを見る方法です。これを使って、任意の要素を見つけ、テキスト、色、スタイルを変更できます！",
    "dom.helloWorld": "こんにちは、世界！",
    "dom.textChanged": "↑ このテキストはJavaScriptで変更されました！",
    "dom.randomText1": "JavaScriptは素晴らしい！🚀",
    "dom.randomText2": "DOMを変更しました！✨",
    "dom.randomText3": "魔法が起きています！🎩",
    "dom.randomText4": "学習を続けよう！📚",
    "dom.code": `// DOMはJavaScriptがウェブページを「見る」方法です
// ページのどの部分でも見つけて変更できます！

// IDで要素を見つける
let heading = document.getElementById("myHeading");

// テキストを変更する
heading.textContent = "新しいテキスト！";

// 色も変更できます：
heading.style.color = "orange";

// または新しい内容を追加：
heading.innerHTML = "<strong>太字のテキスト！</strong>";`,
    "dom.quiz1.question": "DOMとは何の略ですか？",
    "dom.quiz1.opt1": "Data Object Model",
    "dom.quiz1.opt2": "Document Object Model",
    "dom.quiz1.opt3": "Digital Online Mode",
    "dom.quiz1.opt4": "Display Output Manager",
    "dom.quiz2.question": "IDで要素を見つけるメソッドはどれ？",
    "dom.quiz2.opt1": "findElement()",
    "dom.quiz2.opt2": "getElementById()",
    "dom.quiz2.opt3": "searchById()",
    "dom.quiz2.opt4": "locateElement()",
    "dom.quiz3.question": "要素内のテキストを変更するプロパティは？",
    "dom.quiz3.opt1": "innerHTML",
    "dom.quiz3.opt2": "textContent",
    "dom.quiz3.opt3": "両方とも可能",
    "dom.quiz3.opt4": "どちらでもない",

    // User Input Section
    "input.title": "ユーザー入力",
    "input.explanation": "JavaScriptはユーザーがテキストボックスに入力した内容を読み取れます！フォーム、検索バー、インタラクティブなアプリはこの仕組みで動いています。<code>.value</code>を使ってテキストを取得します。",
    "input.tryItYourself": "自分で試してみよう：",
    "input.placeholder": "名前を入力...",
    "input.sayHello": "挨拶する！",
    "input.greeting": "こんにちは、{name}さん！JavaScriptへようこそ！👋",
    "input.pleaseEnter": "まず名前を入力してください！",
    "input.code": `// ユーザーからの入力を取得するのはとても便利です！
// まず、HTMLに入力フィールドとボタンが必要です

// JavaScriptでは、このように値を取得します：
let nameInput = document.getElementById("nameInput");
let userButton = document.getElementById("greetButton");

userButton.addEventListener("click", function() {
  // ユーザーが入力した内容を取得
  let userName = nameInput.value;
  
  // それを使って挨拶を作成
  let message = "こんにちは、" + userName + "さん！";
  
  // 挨拶を表示
  alert(message);
});`,
    "input.quiz1.question": "入力フィールドにユーザーが入力した内容を取得するには？",
    "input.quiz1.opt1": "input.text",
    "input.quiz1.opt2": "input.value",
    "input.quiz1.opt3": "input.content",
    "input.quiz1.opt4": "input.data",
    "input.quiz2.question": "文字列に対して + 演算子は何をしますか？",
    "input.quiz2.opt1": "数値を足す",
    "input.quiz2.opt2": "テキストを結合する",
    "input.quiz2.opt3": "引く",
    "input.quiz2.opt4": "掛ける",

    // Conditions Section
    "cond.title": "If / Else 条件分岐",
    "cond.explanation": "<strong>条件分岐</strong>でコードに判断をさせることができます。<code>if</code>で何かをチェックし、<code>else</code>でそれが真でない場合の処理を書きます。",
    "cond.randomGenerated": "生成された乱数：",
    "cond.checking": "チェック中：",
    "cond.high": "大きい数字！🎯",
    "cond.low": "小さい数字！📉",
    "cond.demoInactive": "「試してみる！」をクリックして、乱数で条件分岐の動作を見よう",
    "cond.code": `// 条件分岐でコードに判断をさせます！
// "if"は何かが真かどうかをチェックします

let age = 18;

if (age >= 18) {
  // ageが18以上の場合、これが実行されます
  console.log("あなたは成人です！");
} else {
  // ageが18未満の場合、これが実行されます
  console.log("あなたは未成年です。");
}

// いろいろなことをチェックできます：
// age > 18   は「18より大きい」という意味
// age < 18   は「18より小さい」という意味
// age === 18 は「18とちょうど等しい」という意味
// age !== 18 は「18と等しくない」という意味`,
    "cond.quiz1.question": "JavaScriptで === は何を意味しますか？",
    "cond.quiz1.opt1": "より小さい",
    "cond.quiz1.opt2": "より大きい",
    "cond.quiz1.opt3": "ちょうど等しい",
    "cond.quiz1.opt4": "等しくない",
    "cond.quiz2.question": "'else' ブロックはいつ実行されますか？",
    "cond.quiz2.opt1": "常に",
    "cond.quiz2.opt2": "if条件が真の時",
    "cond.quiz2.opt3": "if条件が偽の時",
    "cond.quiz2.opt4": "実行されない",
    "cond.quiz3.question": ">= は何を意味しますか？",
    "cond.quiz3.opt1": "より大きい",
    "cond.quiz3.opt2": "より小さい",
    "cond.quiz3.opt3": "以上（大きいか等しい）",
    "cond.quiz3.opt4": "等しくない",

    // Loops Section
    "loop.title": "Forループ",
    "loop.explanation": "<strong>ループ</strong>はコードを自動的に繰り返します。同じコードを100回書く代わりに、1回書いてループに繰り返させましょう！",
    "loop.demoSuccess": "ループで5つのボックスを作成しました！🎉",
    "loop.demoInactive": "「試してみる！」をクリックして、ループで5つのボックスを作成しよう",
    "loop.code": `// ループはコードを複数回繰り返します
// "for"ループは回数がわかっている時に最適です

for (let i = 1; i <= 5; i++) {
  console.log("ボックス番号 " + i);
}

// 動作の仕組み：
// let i = 1     → 1から開始
// i <= 5        → iが5以下の間続ける
// i++           → 各ループの後、iに1を足す

// これは以下を表示します：
// ボックス番号 1
// ボックス番号 2
// ボックス番号 3
// ボックス番号 4
// ボックス番号 5`,
    "loop.quiz1.question": "forループで i++ は何をしますか？",
    "loop.quiz1.opt1": "iから1を引く",
    "loop.quiz1.opt2": "iに1を足す",
    "loop.quiz1.opt3": "iを2倍にする",
    "loop.quiz1.opt4": "iを0にリセットする",
    "loop.quiz2.question": "'for (let i = 0; i < 3; i++)' では、ループは何回実行されますか？",
    "loop.quiz2.opt1": "2回",
    "loop.quiz2.opt2": "3回",
    "loop.quiz2.opt3": "4回",
    "loop.quiz2.opt4": "0回",
    "loop.quiz3.question": "ループの目的は何ですか？",
    "loop.quiz3.opt1": "コードを1回実行する",
    "loop.quiz3.opt2": "コードを複数回繰り返す",
    "loop.quiz3.opt3": "プログラムを停止する",
    "loop.quiz3.opt4": "変数を作成する",

    // Mini Game Section
    "game.title": "ミニゲーム：クリックチャレンジ！",
    "game.explanation": "学んだことを全部使う時間です！このゲームは<strong>クリックイベント</strong>、<strong>変数</strong>、<strong>DOM操作</strong>、<strong>条件分岐</strong>を使います。オレンジの円をできるだけ多くクリックしよう！",
    "game.score": "スコア",
    "game.time": "時間",
    "game.highScore": "ハイスコア",
    "game.gameOver": "ゲームオーバー！",
    "game.youScored": "スコア：",
    "game.playAgain": "もう一度",
    "game.instructions": "オレンジの円をできるだけ速くクリックしよう！",
    "game.startGame": "ゲーム開始",
    "game.code": `// このミニゲームは学んだことすべてを使います！

// ゲームを追跡する変数
let score = 0;
let timeLeft = 10;

// ターゲットのクリックイベント
target.addEventListener("click", function() {
  score = score + 1;           // スコアに1を足す
  moveTarget();                // 新しい位置に移動
});

// setIntervalを使ったタイマー（1秒ごとに実行）
setInterval(function() {
  timeLeft = timeLeft - 1;     // 時間から1を引く
  
  if (timeLeft <= 0) {         // 条件：時間切れ？
    endGame();
  }
}, 1000);

// ターゲットの移動には乱数とDOMを使用`,
    "game.quiz1.question": "ゲームでポイントを追跡するために使うJavaScriptの概念は？",
    "game.quiz1.opt1": "ループ",
    "game.quiz1.opt2": "変数",
    "game.quiz1.opt3": "HTML",
    "game.quiz1.opt4": "CSS",
    "game.quiz2.question": "ゲームで1000ミリ秒（1秒）ごとに実行されるのは？",
    "game.quiz2.opt1": "クリックイベント",
    "game.quiz2.opt2": "Forループ",
    "game.quiz2.opt3": "setIntervalタイマー",
    "game.quiz2.opt4": "If文",
    "game.quiz3.question": "このコースで学んだ概念のうち、ミニゲームで使われているのは？",
    "game.quiz3.opt1": "変数のみ",
    "game.quiz3.opt2": "クリックイベントのみ",
    "game.quiz3.opt3": "ループのみ",
    "game.quiz3.opt4": "変数、イベント、条件分岐、DOM",

    // Footer
    "footer.congrats": "おめでとうございます！🎉",
    "footer.completed": "7つのJavaScriptレッスンをすべて完了しました。練習と開発を続けましょう！",
    "footer.madeWith": "",
    "footer.forBeginners": "初心者のために作られました",

    // Quiz
    "quiz.title": "クイズ",
    "quiz.complete": "クイズ完了！",
    "quiz.gotCorrect": "",
    "quiz.outOf": "/",
    "quiz.correct": "問正解",
    "quiz.tryAgain": "もう一度",
    "quiz.nextQuestion": "次の問題",
    "quiz.seeResults": "結果を見る",

    // Code Block
    "tryIt": "試してみる！",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language");
      if (saved === "en" || saved === "ja") return saved;
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
