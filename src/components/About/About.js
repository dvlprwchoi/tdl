function About() {
  function toggleAbout() {
    console.log('About button clicked');
    if (document.getElementById('aboutSection').className === 'about-closed') {
      return (document.getElementById('aboutSection').className =
        'about-opened');
    } else if (
      document.getElementById('aboutSection').className === 'about-opened'
    ) {
      return (document.getElementById('aboutSection').className =
        'about-closed');
    }
  }
  return (
    <div className="aboutComponents">
      <button onClick={toggleAbout}>About</button>
      <div id="aboutSection" className="about-closed">
        <h2>How to use Todo List App?</h2>
        <ol>
          <li>Type any word(s) in a white box and click 'Add Todo' button.</li>
          <li>
            Once your Todos are listed, you can delete each single Todo by
            clicking 'Delete' button.
          </li>
          <li>
            When you are done with your Todo(s), you can mark it by using each
            checkbox.
          </li>
          <li>
            If you want to clear out completed Todo(s), you can simply click
            'Clear Completed Todo' button. Then it will clear out Todo(s) that
            you have marked it as done.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
