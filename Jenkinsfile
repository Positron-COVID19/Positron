pipeline { 
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                dir("~/Positron") {
                    sh "pm2 delete 'Positron'"
                    sh "git checkout master"
                    sh "git pull"
                    sh "pm2 start npm --name 'Positron' -- start"
                }
            }
        }
    }
}
