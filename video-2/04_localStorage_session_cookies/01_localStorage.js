// LOCAL STORAGE : Storing data in browser that remains even after the browser is closed

// SESSION STORAGE : Storing data temporarily. Tab closed => data gone

// COOKIES : Also stores data. Used for light data.

// ===================================================================

// ===================== localStorage => Browser ka database =====================

// STORING         
localStorage.setItem("name", "John"); // (key, value) 

// UPDATE
localStorage.setItem("name", "Saatvik");

// RETRIEVING
let _name = localStorage.getItem("name");

// REMOVE
localStorage.removeItem("name");

// CLEAR
localStorage.clear();


// localStorage me arrays, objects etc. store nahi ho skte
// we use JSON.stringify() to store and JSON.parse() get it back



// ========================== S E S S I O N - S T O R A G E =================

//close the tab, session data gone

sessionStorage.setItem("name", "John");          // store
let user_name = sessionStorage.getItem("name");  // retrieve
sessionStorage.removeItem("name");               // remove
sessionStorage.clear();                          // clear



// ========================= C O O K I E S =====================================
// cookies need to be cleared manually, or time-defined expiry
// main purpose => authentication
// browser api 
// cookie is encrypted, configurable

// chhota data store karne ke liye (~4Kb)
// localStorage, sessionStorage = ~5MB

// cookies me jo bhi data store karoge, wo data page reload par automatically server pe jayega (sticky)
// ==> vaibha sir ==> Cookies are sticky. they're sent with the network request. So we need to keep em light (4KB)

// storing cookies
document.cookie = "email=saatvik@gmail.com"



// =====================================

// All storages => domain
// SessionStorage => domain + tab

upander



