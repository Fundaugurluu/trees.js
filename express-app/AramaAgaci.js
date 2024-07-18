class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class AramaAgaci{
    constructor(){
    this.root=null
    
    }
    
    isEmpty(){
        return this.root == null
    }
    
    insert(value)
    {
        const newNode= new Node(value)
        if(this.isEmpty())
        {
            this.root=newNode
        }
        else{ this.insertNode(this.root,newNode)}
    
    }
    
    
    insertNode(root,newNode)
    {
        if(newNode.value<root.value)
        {
            if(root.left==null)
            {
                root.left=newNode
            }
            else {
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right==null)
            {
                root.right=newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    
    search(root,value)
    {
        if(!root){
           return `${value} bu agacın içinde degildir.`
        }
        else{
            if(root.value==value)
                {
                return `${value} bu agacın içindedir.`
            } else if(value<root.value)
             {
                return this.search(root.left,value)
            } else{
                return this.search(root.right,value)
            }
    
        }
    }
    
    
    
    
    findMax(root)
    {
        if(!root)
        { return null}
        while(root.right!==null)
        {
            root=root.right;
        }
     
        return `${root.value} agacin max degerdir`;
    }
    
    
    findMin(root){
    if(!root)
    {return null}
    while(root.left!==null)
    {
        root=root.left
    }
    return `${root.value} agacin min degerdir`;
    }
    
    
    deleteLeaves(root){
    if(!root)
    {return null}
    else if(root.right==null && root.left == null)
        {
            return null
    
    }
    
    root.left = this.deleteLeaves(root.left);
    root.right = this.deleteLeaves(root.right);
    return root;
    }
    deleteTree(root)
    {
        if(!root)
        {
            return null
        }
        root.right=this.deleteTree(root.right)
      root.left= this.deleteTree(root.left)
        return null
    }
    
    
    updateNode(oldValue, newValue) {
        const nodeToUpdate = this.search(this.root, oldValue);
        if (nodeToUpdate) {
            nodeToUpdate.value = newValue;
            return true;
        } else {
            return false;
        }
    }
    
    
    }
    
    module.exports = AramaAgaci;