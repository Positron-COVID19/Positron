pipeline { 
    agent any
    stages {
        stage('build') {
            when {
                branch 'master'   
            }
            steps {
                echo 'Building...'
                dir('/opt/Positron') {
                    sh '''
                        git config --global user.email "liao.canada@gmail.com"
                        git config --global user.name "David Liao"
                        git checkout master
                        git pull
                    '''
                    sh 'npm install'
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
                echo 'PM2 watching enabled, no need to manually deploy...'
            }
        }
        stage('sanity check') {
            steps {
                sh 'curl --fail localhost:3000'
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
