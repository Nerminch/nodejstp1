const express = require("express");
const router = express.Router();


const arrayObjects = [
    { id: 1, name: 'nermin' },
    { id: 2, name: 'chahbani' },
    { id: 3, name: 'glsiD' }
  ];

  
  router.get('/all', (req, res) => {
    res.json(arrayObjects);
  });

  
router.get('/:id',(req,res)=>{
  const postId = parseInt(req.params.id);
  const post = arrayObjects.find(post => post.id === postId);
      res.json(post); 
});


module.exports = router;