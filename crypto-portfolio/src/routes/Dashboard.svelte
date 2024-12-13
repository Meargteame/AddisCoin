<script>
    import { onMount } from 'svelte';
    let portfolio = [];
  
    // Fetch portfolio data from the backend
    onMount(async () => {
      const response = await fetch('http://localhost:5000/api/portfolio');
      const data = await response.json();
      portfolio = data.portfolio;
    });
  </script>
  
  <main>
    <h1>Your Crypto Portfolio</h1>
    <table>
      <thead>
        <tr>
          <th>Coin Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each portfolio as { coin_name, quantity, price, id }}
          <tr>
            <td>{coin_name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </main>
  
  <style>
    h1 {
      text-align: center;
    }
    table {
      width: 100%;
      margin-top: 20px;
      border-collapse: collapse;
    }
    th, td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    button {
      margin-right: 10px;
    }
  </style>
  