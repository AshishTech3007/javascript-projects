const insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
  console.log(e.keycode);
  insert.innerHTML = `
    <div class="color">
      <table>
        <th>Key</th>
        <th>keyCode</th>
        <th>Code</th>
        <tr>
          <td>${e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
