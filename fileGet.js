(function () {
        var holder = document.getElementById('drag');
        var ffprobe = require('ffprobe'),
    ffprobeStatic = require('ffprobe-static');

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
            var temp = "";
            for (let f of e.dataTransfer.files) {
                temp = f.path + "\n" + temp;
                ffprobe(f.path, { path: ffprobeStatic.path }, function (err, info) {
                 if (err) return done(err);
                 console.log(info);
                });
            }
            holder.innerHTML = temp;
            
            return false;
        };
})();