pipeline {
    stages  {
        stage("checkout"){
            stage{
                git branch "main", url: "https://gitlab.jatis.com/ioc-indivara/jdt/jdt17/rio.git", credentials: "rio-gitlab-pat" 
            }
        }
        stage("build image"){
            stage {
                sh "docker build . -f Dockerfile -t issmdevops/jdt-rio:1.0.0"
                sh "docker push issmdevops/jdt-rio:1.0.0"
            }
        }
        stage("deploy"){
            stage{
                script(
                    sshagent(credentialsId: "ssh-rio")
                    sh """
                    ssh -o StrictHostKeyCheckIgnore rio@110.239.86.9 << END
                    pwd
                    docker run -d -p 8084:80 issmdevops/jdt-rio:1.0.0
                    """
                )
            }
            
        }
    }
}