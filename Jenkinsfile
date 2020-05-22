pipeline { 
    agent any
    stages {
        stage('build') {
            when {
                branch 'master'
            }
            steps {
                echo 'Building...'
                dir('/home/ubuntu/Positron') {
                    sh 'pwd'
                    sh 'whoami'
                    sh 'git pull'
                    sh '/home/ubuntu/.nvm/versions/node/v10.16.0/bin/npm install'
                }
            }
        }
        stage('test') {
            when {
                branch 'master'
            }
            steps {
                echo 'No tests written yet.'
            }
        }
        stage('deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'Redeploying...'
                sh 'pm2 restart Positron'
            }
        }
    }
    post {
        success {
            echo 'Automated pipeline successful!'
        }
        unsuccessful {
            echo 'Automated pipeline was NOT successful!'
        }
    }
}
