export default function() {
  return `
    <div class="add-contact">

      <h1>Add Super Hero</h1>

      <form>
          <input placeholder="Image url" class="Image"><br>
          <input type="text" placeholder="Super Hero Name" class="Name"><br>
          <input type="text" placeholder="Email" class="Email"><br>
          <input type="text" placeholder="Phone" class="Phone"><br>
          <input type="text" placeholder="Location" class="Location"><br>
      </form>
      <br>
      <br>
      <button class="add-new-contact">Add Super Hero</button>
      
    </div>
  `;
}