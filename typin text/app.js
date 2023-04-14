const text = document.querySelector(".text");
const comment = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in laborum eum atque necessitatibus! Voluptas harum quod blanditiis sint accusantium, cupiditate quae vero, enim praesentium, autem nam? Sapiente, omnis consequatur!
Sint, voluptate alias sequi facilis, dolor autem debitis cumque accusantium, officia eum ut officiis maxime ad nostrum? Rerum exercitationem sequi ipsam, aut labore ipsa ullam perspiciatis quis natus deleniti reiciendis.
Voluptas exercitationem quas commodi deserunt eaque esse, eum hic? Beatae ea at dicta laboriosam quas omnis expedita nisi, velit labore, repellat ad quo eveniet sed minus. Dolor ratione sit quaerat.
Eveniet neque dolore, dolores quos et doloribus consectetur velit perspiciatis fugit eius cum accusamus totam illum, iure nam. Eum animi doloremque reprehenderit voluptate. Saepe aspernatur quod, neque fuga aut voluptates.
Dolorem laborum deleniti non aspernatur, dolor eligendi eos, distinctio, accusantium nemo minima exercitationem error blanditiis voluptate delectus obcaecati. Excepturi voluptates et nobis repellat animi! Non doloribus modi itaque beatae necessitatibus.
Facilis magnam ullam culpa maxime quisquam eos nam, illum eveniet accusamus! Illum reprehenderit ea eligendi doloribus dolores doloremque accusantium est ad. Quaerat harum rem in odio excepturi dolorum, illo veniam!
Facilis, suscipit! Reiciendis perspiciatis, natus illo similique quisquam, suscipit tempora esse nihil earum quaerat voluptas, veniam eligendi voluptatem impedit ipsa et at architecto adipisci recusandae velit provident porro sed quae?
Hic, nesciunt unde! Doloremque distinctio esse voluptate perferendis cupiditate temporibus eius corrupti. Officia, temporibus aliquam? Soluta, harum est necessitatibus perferendis minus ad hic vitae ullam aspernatur illo? Minus, debitis optio?
Qui, dolorum magnam amet aperiam nihil incidunt, illum nobis ipsa illo iste magni eos perspiciatis voluptas ea voluptatem, nulla non. Unde inventore ipsam saepe blanditiis perspiciatis iste itaque qui voluptatem!
Assumenda laborum velit unde est officia, recusandae rerum quo sunt modi vero maiores, eos expedita maxime a, odit eius sed? Laboriosam obcaecati ipsa quasi dolorem ullam assumenda, iusto in eveniet.`;

let t="";
let i=0;
const type = () => {
    if(i>comment.length)
        return;

    
    t+=comment[i];
    text.innerHTML=t;
    i++;
    setTimeout(type,50);
}

type();