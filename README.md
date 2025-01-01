# How to Setup & Run this Project

<h2>How to Run Project</h2>


---

<h2>Install NodeJs (Ignore if already installed)</h2>
<ol>
  <li>Visit the official Node.js website: <a href="https://nodejs.org/en/download/">Tap here to visit</a></li>
  <li>Download the Node.js installer.</li>
  <li>Run the installer.</li>
  <li>Follow the prompts in the installer.</li>
</ol>

---

<h2>First, Run Backend, then Frontend & Admin</h2>

---

<h3>Steps to Setup Backend of the Project</h3>
<ol>
  <li>Open the project folder in VS Code.</li>
  <li>Open the integrated terminal:
    <ul>
      <li>Right-click on the sidebar and select <strong>"Open in Integrated Terminal"</strong>.</li>
    </ul>
  </li>

  <li>Run the following command and wait for installation to complete:  <br><br>
    <pre><code>npm install</code></pre>
    <small>(Internet is required for this step.)</small>  <h3>
  </li>
  <li><h3>Setup MongoDB Compass: </h3>
    <ul>
      <li>Go to your MongoDB Compass Application then create a new database named Swiggy_Mern(or you can name it anything just change the name of the database in the backend config file to your respective db name).</li>
      <li>Sign up on the website.</li>
      <li>Create a new project.</li>
      <li>Go to the database section and build a database:
        <ul>
          <li>Select <strong>M0</strong>, choose your region, and create a database.</li>
        </ul>
      </li>
      <li>Setup username and password. <strong>Note:</strong> Do not use the <code>@</code> symbol in the password.</li>
      <li>Whitelist IP <code>0.0.0.0</code> and click on <strong>Add Entry</strong>.</li>
      <li>Connect to the database:
        <ul>
          <li>Select the Compass option and copy the connection string.</li>
          <li>Paste it in <code>db.js</code>, replacing the placeholder password with the one you created earlier, and save changes.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><h3>Set up Stripe</h3>:
    <ul>
      <li>Open the <code>.env</code> file in the backend folder and paste your Stripe secret key in the <code>STRIPE_SECRET_KEY</code> variable.</li>
    </ul>
  </li>
  <li>To run the backend, use:<br><br>
    <pre><code>npm run server</code></pre>
  </li>
</ol>

---

<h3>Steps to Run Frontend & Admin Panel of the Project</h3>
<ol>
  <li>Open the project folder in VS Code.</li>
  <li>Open the integrated terminal in the project directory:
    <ul>
      <li>Right-click on the sidebar and select <strong>"Open in Integrated Terminal"</strong>.</li>
    </ul>
  </li>
  <li>Run the following command and wait for installation to complete:
    <pre><code>npm install</code></pre>
    <small>(Internet is required.)</small>
  </li>
  <li>After installation, you will see a <code>node_modules</code> folder in the sidebar.</li>
  <li>To start the project, run:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>The project will open in your default web browser.</li>
</ol>

---
