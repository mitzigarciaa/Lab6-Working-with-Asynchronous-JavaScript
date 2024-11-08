//----------Simulate Data Fetching Using Promises (with Error Simulation)----------

// Helper function to simulate a delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Random success simulator
  function randomSuccess() {
    return Math.random() < 0.4; 
  }
  
  // Fetch user profiles
  async function fetchUserProfiles() {
    try {
      await delay(1000); 
      if (randomSuccess()) {
        return "User profiles fetched";
      } else {
        throw new Error("Failed to fetch user profiles");
      }
    } catch (error) {
      throw error; 
    }
  }
  
  // Fetch posts
  async function fetchPosts() {
    try {
      await delay(2000); 
      if (randomSuccess()) {
        return "Posts fetched";
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      throw error; 
    }
  }
  
  // Fetch comments
  async function fetchComments() {
    try {
      await delay(3000); 
      if (randomSuccess()) {
        return "Comments fetched";
      } else {
        throw new Error("Failed to fetch comments");
      }
    } catch (error) {
      throw error; 
    }
  }
  
  
  //----------Implement Sequential and Parallel Data Fetching----------
  
  // Sequential fetching 
  async function fetchDataSequentially() {
    try {
      const userProfiles = await fetchUserProfiles();
      console.log(userProfiles); 
  
      const posts = await fetchPosts();
      console.log(posts); 
  
      const comments = await fetchComments();
      console.log(comments);
    } catch (error) {
      console.error("Error during sequential fetching:", error);
    }
  }
  
  fetchDataSequentially();
  
  // Parallel fetching 
  async function fetchDataInParallel() {
    try {
      const [userProfiles, posts, comments] = await Promise.all([
        fetchUserProfiles(),
        fetchPosts(),
        fetchComments()
      ]);
  
      console.log(userProfiles); 
      console.log(posts); 
      console.log(comments); 
    } catch (error) {
      console.error("Error during parallel fetching:", error);
    }
  }
  
  fetchDataInParallel();
  
  
  
  //----------Chaining Async Functions: -----------
  async function getUserContent() {
    try {
      console.log("Fetching user profile..");
      const userProfile = await fetchUserProfiles();
      console.log("User profile retrieved:", userProfile);
  
      console.log("Fetching posts..");
      const posts = await fetchPosts();
      console.log("Posts retrieved:", posts);
  
      console.log("Fetching comments..");
      const comments = await fetchComments();
      console.log("Comments retrieved:", comments);
  
    
      const allData = { userProfile, posts, comments };
      console.log("All data retrieved:", allData);
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  getUserContent();
  