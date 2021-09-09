<template>
  <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark"> 
          <div class="container">
            <div class="nav navbar-nav">
                <a class="nav-item nave-link active" href="#">Home</a>
                <a class="nav-item nave-link" href="#">product</a>
            </div>
            <div>
                <div class="dropdown open">
                    <button 
                        class="btn btn-secondary dropdown-toggle" 
                        type="button" 
                        id="triggerId" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    >Dropdown</button>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <button class="dropdown-item" href="#">Action</button>
                        <button class="dropdown-item disabled" href="#">Disabled action</button>
                    </div>
                </div>
            </div>
            </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>