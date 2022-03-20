// 获取所有学生
function fecthStudent(stuid) {
    $.ajax({
        url:"./student.json",
        success:function(msg){
            const arr = msg.filter(res=>stuid == res.id)
            fetchClasses(arr[0].classesId)
        }
    })
}
// 获取所有班级
function fetchClasses(classid){
    $.ajax({
        url:"./classes.json",
        success:function(msg){
            console.log(msg.filter(res=>classid == res.id));
        }
    })
}

fecthStudent(1);