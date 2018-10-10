(function () {
        var holder = document.getElementById('drag');

        holder.ondragover = () => {
            return false;
        };

        holder.ondragleave = () => {
            return false;
        };

        holder.ondragend = () => {
            return false;
        };

        holder.ondrop = (e) => {
            e.preventDefault();
            var temp;
            for (let f of e.dataTransfer.files) {
                temp = f.path + "\n" + temp;
            }
            holder.innerHTML = temp;
            
            return false;
        };
})();